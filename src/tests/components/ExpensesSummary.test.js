import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expensesCount={1}
            expensesTotal={1234}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with 2 expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expensesCount={2}
            expensesTotal={123444}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
