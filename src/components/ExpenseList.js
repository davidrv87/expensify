import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Unconnected component
const ExpenseList = props => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map(expense => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))
        }
    </div>
);

// Define the things we want to get from the store
const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

// Connected component
export default connect(mapStateToProps)(ExpenseList);
