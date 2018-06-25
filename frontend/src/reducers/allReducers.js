import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';
import chosenClientReducer from './chosenClientReducer';
import searchReducer from './searchReducer';

const allReducers = combineReducers({
    clients: clientsReducer,
    chosen: chosenClientReducer,
    value: searchReducer
})

export default allReducers