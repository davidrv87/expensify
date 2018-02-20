import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize'; // Required as per v13 - see https://github.com/airbnb/react-dates/issues/797
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') { // Avoid redirecting, for example if refreshing the page
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
