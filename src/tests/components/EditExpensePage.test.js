import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpenseSpy}
            startRemoveExpense={startRemoveExpenseSpy}
            history={historySpy}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    const updates = {
        description: 'New description',
        note: 'New note',
        amount: 50
    };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(wrapper.instance().props.expense.id, updates);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(wrapper.instance().props.expense);
});
