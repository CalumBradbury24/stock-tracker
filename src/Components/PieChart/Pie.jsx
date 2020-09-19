import React from "react";
import { VictoryPie } from "victory";
import { connect } from "react-redux";
import "./Pie.styles.scss";

const PieVis = ({
  numberOfShareOne,
  numberOfShareTwo,
  numberOfShareThree,
  numberOfShareFour,
  numberOfShareFive,
}) => {
  const getTotal = () => {
    if (numberOfShareOne < 0) {
      numberOfShareOne = 0;
    }
    if (numberOfShareTwo < 0) {
      numberOfShareTwo = 0;
    }
    if (numberOfShareThree < 0) {
      numberOfShareThree = 0;
    }
    if (numberOfShareFour < 0) {
      numberOfShareFour = 0;
    }
    if (numberOfShareFive < 0) {
      numberOfShareFive = 0;
    }
    return (
      Number(numberOfShareOne) +
      Number(numberOfShareTwo) +
      Number(numberOfShareThree) +
      Number(numberOfShareFour)+
      Number(numberOfShareFive)
    );
  };

  const getData = () => {
    if (getTotal() <= 0) {
      return [];
    } else
      return [
        {
          x: numberOfShareOne > 0 ? "JNJ" : null,
          y: numberOfShareOne / getTotal(),
        },
        {
          x: numberOfShareTwo > 0 ? "NDVA" : null,
          y: numberOfShareTwo / getTotal(),
        },
        {
          x: numberOfShareThree > 0 ? "NG" : null,
          y: numberOfShareThree / getTotal(),
        },
        {
          x: numberOfShareFour > 0 ? "BP" : null,
          y: numberOfShareFour / getTotal(),
        },
        {
          x: numberOfShareFive > 0 ? "BNS" : null,
          y: numberOfShareFive / getTotal(),
        },
      ];
  };

  return getTotal() <= 0 ? (
    <h2>Add shares to build pie.</h2>
  ) : (
    <div className = 'pie-container'>
    <VictoryPie 
      data={getData()}
      animate={{
        duration: 400,
      }}
      colorScale={[
        "DarkSlateBlue",
        "crimson",
        "DarkSalmon",
        "DarkSeaGreen",
        "ForestGreen",
      ]}
      innerRadius={100}
    />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfShareOne: state.shares.numberOfShareOne,
    numberOfShareTwo: state.shares.numberOfShareTwo,
    numberOfShareThree: state.shares.numberOfShareThree,
    numberOfShareFour: state.shares.numberOfShareFour,
    numberOfShareFive: state.shares.numberOfShareFive,
  };
};

export default connect(mapStateToProps)(PieVis);
