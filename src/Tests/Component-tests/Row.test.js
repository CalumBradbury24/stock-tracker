import { shallow } from 'enzyme';
import Row from '../../Components/StockTable/Row';
import React from 'react';
import { act } from "react-dom/test-utils";
//shallow render only renders the component and not any other child components inside of the component
//So you only test one unit at a time without affecting child components,
//keeping tests clean

describe("Table rows ", () => {
    const RowComponent = shallow(<Row ticker='' numberOfShares='' />);
    it('expect to render Row component', () => {
       
        expect(RowComponent).toBeDefined();
    });
    
    describe('when rendered', () => {
        it('should render data from API', (done) => {
            act(() => {
                RowComponent.update();
            });
            expect(RowComponent.find('td')).toHaveLength(5);
            done();
        });
    })
 
})
