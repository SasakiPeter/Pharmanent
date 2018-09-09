import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { default as Counter } from './modules/Counter';

export default () => {
    const store = createStore(
        // ここでcombineさせてルートとして、即Store生成
        combineReducers({
            counter: Counter,
        }),
        applyMiddleware(
            logger
        )
    );
    return store;
}

export const productionStore = () => {
    const store = createStore(
        combineReducers({
            counter: Counter,
        }),
    );
    return store;
}