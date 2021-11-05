import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {appReducer} from './appReducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store