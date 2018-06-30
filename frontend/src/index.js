import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import allReducers from './reducers/allReducers';

export const store = createStore(
    allReducers, 
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension()
    )
);

ReactDOM.render( 
<Provider store = {store}>
    < App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();