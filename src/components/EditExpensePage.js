import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(updates) => {
                // props.match.params.id: get the id from the URI
                props.dispatch(editExpense(props.match.params.id, updates));
                props.history.push('/');
            }}
        />
        <button
            onClick={() => {
                // You could've used props.match.params.id as well
                props.dispatch(removeExpense(props.expense));
                props.history.push('/');
            }}
        >
            Remove
        </button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);
