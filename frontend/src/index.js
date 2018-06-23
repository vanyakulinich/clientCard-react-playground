import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// semantic ui
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import clientsReducer from './reducers/clientsReducer';
import chosenClientReducer from './reducers/chosenClientReducer';

const allReducers = combineReducers({
    clients: clientsReducer,
    chosen: chosenClientReducer
})

export const store = createStore(
    allReducers, 
    {
        clients: [],
        chosen: null

    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render( 
<Provider store = {store}>
    < App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();