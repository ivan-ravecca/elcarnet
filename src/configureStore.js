import { createStore, applyMiddleware } from 'redux';
import AppReducers from './reducers/app-reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        AppReducers,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
}
