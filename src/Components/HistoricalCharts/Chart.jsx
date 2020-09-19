import React, { useState, useEffect } from "react";
import { IEX } from "../IEX/IEX";
import { Line } from "react-chartjs-2";
import "./Chart.styles.scss";

const Chart = ({ ticker }) => {
  const [histData, setHistData] = useState([]);
  useEffect(() => {
    if (ticker === "") {
      return;
    }
    //const url = `${IEX.base_url}/stock/${ticker}/chart/5y?token=${IEX.api_token}`;//Real Url
    const url = `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/3m?token=Tpk_8d876a2222b54ec9977c8c8bf5045c07`; //Sandbox url for testing
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHistData(data);
      })
      .catch((error) => {
        throw error;
      });
  }, [ticker]);

  const getData = () => {
    let graphData = [];
    var labels = [];
    for (var i = 0; i < histData.length; ++i) {
      graphData[i] = histData[i].close;
      labels[i] = histData[i].date;
    }

    return {
      labels: labels,
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "red",
          borderWidth: 1,
          data: graphData,
        },
      ],
    };
  };

  return (
    <div className="Container">
      {histData.length > 0 && ticker !== "" ? (
        <Line
          data={getData()}
          options={{
            responsive: true,
            aspectRatio: 1,
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: false,
                  },
                  ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Closing Price($)",
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <div className="search-message">
          <h2>Enter ticker for historical data.</h2>
        </div>
      )}
    </div>
  );
};
export default Chart;
