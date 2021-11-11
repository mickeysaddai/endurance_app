import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import history from '../util/history';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter history={history}>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
