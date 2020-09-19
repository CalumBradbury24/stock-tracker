import React, { useState } from "react";
import Chart from "./Chart";
import "./HistoricalCharts.styles.scss";
const HistoricalCharts = () => {
  const [ticker, setTicker] = useState("");

  const getTicker = (e) => {
    const value = e.target.value;
    setTicker(value);
  };

  return (
    <React.Fragment>
      <span className="sp">
        <input type="text" className="form__field" onChange={getTicker} />
      </span>
      <Chart ticker={ticker} />
    </React.Fragment>
  );
};
export default HistoricalCharts;
