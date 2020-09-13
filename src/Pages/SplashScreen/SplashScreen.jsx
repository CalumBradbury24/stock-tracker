import React from "react";
import CustomLink from '../../Components/CustomLink/CustomLink';
import './SplashScreen.styles.scss';

const SplashScreen = ({ signInWithGoogle }) => {
  return (
    <div className='SplashScreen'>
      <h1>Personal Stock Tracker</h1>
      <CustomLink linkTo={'/home'} route={signInWithGoogle} text={'Sign In With Google'}/>
    </div>
  );
};

export default SplashScreen;
