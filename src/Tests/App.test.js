import React from 'react';

import App from '../App';
import { shallow } from 'enzyme';
import HomePage from '../Pages/HomePage/HomePage';
import SplashScreen from '../Pages/SplashScreen/SplashScreen'
//import Adapter from 'enzyme-adapter-react-16'
//configure({adapter: new Adapter()});

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

/*
describe("routes", () => {
  it('renders as expected', () => {
    const component = shallow(<HomePage/>);
    expect(component).toMatchSnapshot();
  });

})
*/
