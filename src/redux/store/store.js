import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'

const configStore = (initState) => {
    return createStore(rootReducer, initState, applyMiddleware(thunk, createLogger()));
}

export default configStore;
