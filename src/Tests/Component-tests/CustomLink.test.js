import { shallow } from 'enzyme';
import CustomLink from '../../Components/CustomLink/CustomLink';
import React from 'react';
//shallow render only renders the component and not any other child components inside of the component
//So you only test one unit at a time without affecting child components,
//keeping tests clean

it('expect to render CustomLink component', () => {
    const linkComponent = shallow(<CustomLink  linkTo='/' text={''} />);
    expect(linkComponent).toBeDefined();
});
