import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const updates = {
        description: 'New description',
        note: 'New note',
        amount: 50
    };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(wrapper.instance().props.expense.id, updates);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(wrapper.instance().props.expense);
});
