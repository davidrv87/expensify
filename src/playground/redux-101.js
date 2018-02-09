import { createStore } from 'redux';

// This function uses destructuring - taken to the next level
// Default the arg object to empty object to avoid undefined when accessing properties
// { incrementBy = 1 }: access the property incrementBy and if it does not exist, default to 1
// Assign it to the return value - no need to use ': incrementBy' because they have the same name
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({ type: 'RESET' });

// Reducers
// 1. Are pure functions: only depend on the input and don't modify anything outside of its scope
// 2. Never change state or action - only read them
// First argument is the default state
// Second argument is the action we want to dispatch
/* eslint-disable indent */
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};
/* eslint-enable indent */

const store = createStore(countReducer);

// Subscribe returns a function that we can call if we want to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 11 }));

store.dispatch(setCount({ count: 123456 }));
