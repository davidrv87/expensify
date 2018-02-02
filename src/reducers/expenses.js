const expensesReducerDefaultState = [];

/* eslint-disable indent */
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; // ES6 spread operator
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                return expense;
            });
        default:
            return state;
    }
};
/* eslint-enable indent */

export default expensesReducer;
