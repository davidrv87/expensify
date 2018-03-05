import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import RemoveExpenseModal from './RemoveExpenseModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        expenseToRemove: undefined
    };
    onSubmit = updates => {
        this.props.startEditExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.setState(() => ({ expenseToRemove: this.props.expense.description }))
    };
    handleConfirmRemove = () => {
        this.setState(() => ({ expenseToRemove: undefined }));
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    };
    handleCancelRemove = () => {
        this.setState(() => ({ expenseToRemove: undefined }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                    <RemoveExpenseModal
                        expenseToRemove={this.state.expenseToRemove}
                        handleConfirmRemove={this.handleConfirmRemove}
                        handleCancelRemove={this.handleCancelRemove}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
    startRemoveExpense: expense => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
