import React from 'react';
import { render } from 'react-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import App from './components/App';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';

const initialState = {
    lists: [{
        id: 0,
        title: 'Todo',
        archived: false
    },{
        id: 1,
        title: 'Doing',
        archived: false
    },{
        id: 2,
        title: 'Done',
        archived: false
    }]
};

const persistantState = loadState() ||  initialState;

const store = createStore(
    rootReducer,
    persistantState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState({
        lists: store.getState().lists,
        cards: store.getState().cards
    });
}, 1000));

// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
