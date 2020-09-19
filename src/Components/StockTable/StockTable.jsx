import React from "react";
import Row from "./Row";
import { connect } from "react-redux";
import {
  setOneValue,
  setTwoValue,
  setThreeValue,
  setFourValue,
  setFiveValue,
} from "../../Redux/actions";

import './StockTable.styles.scss';

const StockTable = ({
  onShareOneChange,
  onShareTwoChange,
  onShareThreeChange,
  onShareFourChange,
  onShareFiveChange,
  numberOfShareOne,
  numberOfShareTwo,
  numberOfShareThree,
  numberOfShareFour,
  numberOfShareFive,
}) => {
  return (
    <React.Fragment>
      <h1 className ='table-title'>My Portfolio</h1>
      <div className="container-table100">
        <div className="wrap-table100">
          <table>
            <thead>
              <tr className="table">
                <th className="column">Ticker</th>
                <th className="column">Price($)</th>
                <th className="column">Time</th>
                <th className="column">Result</th>
                <th className="column">Value($)</th>
                <th className="column">Quantity Of Shares</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Row
                  ticker="JNJ"
                  className="column"
                  numberOfShares={numberOfShareOne}
                />
                <td className="form__group field">
                  <input
                    className="form__field"
                    placeholder={numberOfShareOne} 
                    onChange={onShareOneChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <Row
                  ticker="NVDA"
                  className="column"
                  numberOfShares={numberOfShareTwo}
                />
                <td className="form__group field">
                  <input
                    className="form__field"
                    placeholder={numberOfShareTwo}
                    onChange={onShareTwoChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <Row
                  ticker="NG"
                  className="column"
                  numberOfShares={numberOfShareThree}
                />
                <td className="form__group field">
                  <input
                    className="form__field"
                    placeholder={numberOfShareThree}
                    onChange={onShareThreeChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <Row
                  ticker="BP"
                  className="column"
                  numberOfShares={numberOfShareFour}
                />
                <td className="form__group field">
                  <input
                    className="form__field"
                    placeholder={numberOfShareFour}
                    onChange={onShareFourChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <Row
                  ticker="BNS"
                  className="column"
                  numberOfShares={numberOfShareFive}
                />
                <td className="form__group field">
                  <input
                    className="form__field"
                    placeholder={numberOfShareFive}
                    onChange={onShareFiveChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
              <tr> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShareOneChange: (event) => dispatch(setOneValue(event.target.value)),
    onShareTwoChange: (event) => dispatch(setTwoValue(event.target.value)),
    onShareThreeChange: (event) => dispatch(setThreeValue(event.target.value)),
    onShareFourChange: (event) => dispatch(setFourValue(event.target.value)),
    onShareFiveChange: (event) => dispatch(setFiveValue(event.target.value)),
  };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(StockTable));
