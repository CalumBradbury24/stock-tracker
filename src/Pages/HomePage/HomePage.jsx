import React from "react";
import CustomLink from "../../Components/CustomLink/CustomLink";
import StockTable from "../../Components/StockTable/StockTable";
import PieVis from '../../Components/PieChart/Pie';
import "./HomePage.styles.scss";

const HomePage = ({ signOut }) => {
  return (
    <div className="HomePage">
      <span className="signout">
        <CustomLink linkTo={"/"} route={signOut} text={"Sign Out"} />
      </span>
      <div className="content">
        <div className="grid-container">
          <div className="Table">
            {" "}
            <StockTable />
          </div>
          <div className="Chart"></div>
          <div className="Pie"><PieVis/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
