import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';

const countryInfo = (state=[], action) => {
    if (action.type === 'CHOOSE_COUNTRY'){
        return [action.payload];
    }
    else {
        return state;
    }
}

const allReducers = combineReducers({
    countryInfo
});

const storeInstance = createStore(
    allReducers,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
