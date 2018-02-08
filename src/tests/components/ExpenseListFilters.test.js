import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle a text change', () => {
    const value = 'Rent';
    // wrapper.find('input').prop('onChange')({ target: { value } }); // Used for nested components
    wrapper.find('input').simulate('change', { target: { value } }); // Equivalents, preferred
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    // Initial sortBy set to 'amount'
    wrapper.setProps({ filters: altFilters });
    const value = 'date';
    // wrapper.find('select').prop('onChange')({ target: { value } });
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    // wrapper.find('select').prop('onChange')({ target: { value } });
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const { startDate, endDate } = altFilters;
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focused changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
