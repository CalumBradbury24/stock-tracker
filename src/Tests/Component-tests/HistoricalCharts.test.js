import { shallow } from 'enzyme';
import HistoricalCharts from '../../Components/HistoricalCharts/HistoricalCharts';
import React from 'react';
import Chart from '../../Components/HistoricalCharts/Chart';
//shallow render only renders the component and not any other child components inside of the component
//So you only test one unit at a time without affecting child components,
//keeping tests clean

describe("historical charts container", () => {
    const HistoricalChartsComponent = shallow(<HistoricalCharts />);
    it('expect to render historical chart component', () => {
       
        expect(HistoricalChartsComponent).toBeDefined();
    });
    
    it('should have a ticker input field', () => {
        expect(HistoricalChartsComponent.find('input[type="text"]').length).toEqual(1);
    });

    it('input field value should set the ticker prop of Chart', () => {
        HistoricalChartsComponent.find('input[type="text"]').simulate('change', {
          target: {
            value: 'NVDA',
          },
        });
        expect(HistoricalChartsComponent.find(Chart).prop('ticker')).toEqual(
          'NVDA',
        );
      });
})
