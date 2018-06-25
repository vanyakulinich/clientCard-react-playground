import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/allReducers';

export const store = createStore(
    allReducers, 
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render( 
<Provider store = {store}>
    < App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();