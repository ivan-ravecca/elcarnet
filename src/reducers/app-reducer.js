import { combineReducers } from 'redux';
import Global from './global-reducer';

const RootAppReducers = combineReducers({
    bulkData: Global
})

export default RootAppReducers;
