import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize'; // Required as per v13 - see https://github.com/airbnb/react-dates/issues/797
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        // When we connect a Component, we have access to dispatch() via props.dispatch
                        // This can be seen using the React Dev Tool in Chrome
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId='startDate'
                    endDate={this.props.filters.endDate}
                    endDateId='endDate'
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
