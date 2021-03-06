import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Unconnected component (exported for testing)
export const ExpenseList = props => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                        props.expenses.map(expense => (
                            <ExpenseListItem key={expense.id} {...expense} />
                        ))
                    )
            }
        </div>
    </div>
);

// Define the things we want to get from the store
const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

// Connected component
export default connect(mapStateToProps)(ExpenseList);
