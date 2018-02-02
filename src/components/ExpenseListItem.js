import React from 'react';

const ExpenseListItem = ({ description, amount = 0, createdAt = 0 }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
    </div>
);

export default ExpenseListItem;
