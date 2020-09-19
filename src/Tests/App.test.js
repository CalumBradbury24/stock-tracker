import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../Pages/HomePage/HomePage';
import SplashScreen from '../Pages/SplashScreen/SplashScreen'

describe("Components exist", () => {
  it("HomePage exists", () => {
    const component = shallow(<HomePage/>);
    expect(component).toBeDefined();
  });

  it("SplashScreen exists", () => {
    const component = shallow(<SplashScreen/>);
    expect(component).toBeDefined();
  })
})

