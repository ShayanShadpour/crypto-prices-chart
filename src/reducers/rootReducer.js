import { combineReducers } from 'redux';
import ethereumReducer from './ethereumReducer';

const rootReducer = combineReducers({
    ethereum: ethereumReducer
})

export default rootReducer;
