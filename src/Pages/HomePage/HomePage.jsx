import React from "react";
import CustomLink from '../../Components/CustomLink/CustomLink';
import StockTable from '../../Components/StockTable/StockTable';
import "./HomePage.styles.scss";

const HomePage = ({ signOut }) => {
  return (
    <div className="HomePage">
      <span className ='signout'>
       <CustomLink linkTo={'/'} route={signOut} text={'Sign Out'}/>
      </span>
      <div className ='content'>
      <div class="grid-container">
  <div class="Table">  <StockTable /></div>
  <div class="Chart"></div>
  <div class="Pie"></div>
</div>
      
      </div>
    </div>
  );
};

export default HomePage;