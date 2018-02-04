import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


const AddExpensePage = props => (
    <div>
        <h1>Create Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                // This can be seen in the 'React' tab in DevTools
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);
