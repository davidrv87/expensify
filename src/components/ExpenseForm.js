import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize'; // Required as per v13 - see https://github.com/airbnb/react-dates/issues/797
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from "../actions/expenses";

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        note: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(addExpense(this.state));
    };
    render() {
        return (
            <div>
                <form
                    onSubmit={this.onFormSubmit}
                >
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false} // Enable past days
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Create Expense</button>
                </form>
            </div>
        );
    }
}

export default connect()(ExpenseForm);
