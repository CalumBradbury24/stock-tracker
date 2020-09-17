import React from "react";
import Row from "./Row";
import { connect } from "react-redux";
import {
  setOneValue,
  setTwoValue,
  setThreeValue,
  setFourValue,
} from "../../Redux/actions";

const StockTable = ({
  onShareOneChange,
  onShareTwoChange,
  onShareThreeChange,
  onShareFourChange,
  numberOfShareOne,
  numberOfShareTwo,
  numberOfShareThree,
  numberOfShareFour,
}) => {
  return (
    <div className="limiter">
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
                <th className="column">Quantity</th>
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
                    placeholder="Enter number of shares held"
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
                    placeholder="Enter number of shares held"
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
                    placeholder="Enter number of shares held"
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
                    placeholder="Enter number of shares held"
                    onChange={onShareFourChange}
                    type="number"
                    name="name"
                    id="name"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
//Maybe have dividend section where you can input $ per share and calculate dividends
const mapDispatchToProps = (dispatch) => {
  return {
    onShareOneChange: (event) => dispatch(setOneValue(event.target.value)),
    onShareTwoChange: (event) => dispatch(setTwoValue(event.target.value)),
    onShareThreeChange: (event) => dispatch(setThreeValue(event.target.value)),
    onShareFourChange: (event) => dispatch(setFourValue(event.target.value)),
  };
};

const mapStateToProps = (state) => {
  return {
    numberOfShareOne: state.shares.numberOfShareOne,
    numberOfShareTwo: state.shares.numberOfShareTwo,
    numberOfShareThree: state.shares.numberOfShareThree,
    numberOfShareFour: state.shares.numberOfShareFour,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(StockTable));
