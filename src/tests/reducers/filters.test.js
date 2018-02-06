import moment from 'moment';

import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    // @@INIT is the first action sent. It can be seen in Redux tab in DevTools
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set start date to provided value', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(-1000)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});

test('should set end date to provided value', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(1000)
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});
