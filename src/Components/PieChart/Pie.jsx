import React from "react";
import { VictoryPie } from "victory";
import { connect } from "react-redux";
import './Pie.styles.scss';

const PieVis = ({
  numberOfShareOne,
  numberOfShareTwo,
  numberOfShareThree,
  numberOfShareFour,
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
    return (
      Number(numberOfShareOne) +
      Number(numberOfShareTwo) +
      Number(numberOfShareThree) +
      Number(numberOfShareFour)
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
      ];
  };

  return (
      <VictoryPie
        data={getData()}
        animate={{
          duration: 500,
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
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfShareOne: state.shares.numberOfShareOne,
    numberOfShareTwo: state.shares.numberOfShareTwo,
    numberOfShareThree: state.shares.numberOfShareThree,
    numberOfShareFour: state.shares.numberOfShareFour,
  };
};

export default connect(mapStateToProps)(PieVis);
