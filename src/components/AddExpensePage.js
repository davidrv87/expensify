import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    /* eslint-disable */
    onSubmit = expense => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    /* eslint-enable */
    render() {
        return (
            <div>
                <h1>Create Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// In order to be able to test this component properly by passing a spy,
// we refactor the call 'props.dispatch(addExpense(expense))' down here
const mapDispatchToProps = dispatch => ({
    startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
