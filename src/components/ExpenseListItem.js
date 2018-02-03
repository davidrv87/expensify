import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount = 0, createdAt = 0, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
        <button
            onClick={(e) => {
                dispatch(removeExpense({ id }));
            }}
        >
            Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);
