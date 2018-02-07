import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Unconnected component (exported for testing)
export const ExpenseList = props => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses to show</p>
            ) : (
                    props.expenses.map(expense => (
                        <ExpenseListItem key={expense.id} {...expense} />
                    ))
                )
        }
    </div>
);

// Define the things we want to get from the store
const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

// Connected component
export default connect(mapStateToProps)(ExpenseList);
