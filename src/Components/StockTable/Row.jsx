import React, { useEffect, useState } from "react";
import { IEX } from "../IEX/IEX";
import "./Row.styles.scss";
//get all historical data
//url = 'https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?token=pk_58d271c8112c441cbf88f6c845f468b2'

const Row = ({ ticker, numberOfShares }) => {
  const [price, setPrice] = useState("");
  const [pricePrev, setPricePrev] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const url = `${IEX.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${IEX.api_token}`;
    const yesterdaysDateUrl = `${IEX.base_url}/stock/${ticker}/previous?chartLast=1&token=${IEX.api_token}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data[data.length - 1].close === null) {
          setPrice("Couldn't fetch");
          setTime("Couldn't fetch");
        } else {
          setPrice(data[data.length - 1].close.toFixed(2));
          setTime(data[data.length - 1].minute);
        }
      })
      .catch((error) => {
        throw error;
      });

    fetch(yesterdaysDateUrl)
      .then((res) => res.json())
      .then((data) => {
        //  console.log('hello', data)
        setPricePrev(data.close);
      })
      .catch((error) => {
        throw error;
      });
  }, [ticker]);

  const getChange = () => {
    let priceChange = (price - pricePrev).toFixed(2);
    let percentChange = ((priceChange / pricePrev) * 100).toFixed(2);
    return `${priceChange}$ (${percentChange}%)`;
  };

  const getValue = () => {
    if (numberOfShares < 0) {
      return "Invalid value";
    } else if (numberOfShares === 0) {
      return 0;
    } else {
      return (price * numberOfShares).toFixed(2);
    }
  };

  const style = () => {
    if (price - pricePrev > 0) {
      return { color: "green" };
    } else
      return {
        color: "red",
      };
  };

  return (
    <React.Fragment>
      <td>{ticker}</td>
      <td>{price}</td>
      <td>{time}</td>
      <td style={style()}>{getChange()}</td>
      <td>{getValue()}</td>
    </React.Fragment>
  );
};

export default React.memo(Row);
