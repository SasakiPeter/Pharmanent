import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { productionStore } from './configureStore';

let store
if (process.env.NODE_ENV === "development") {
    store = configureStore();

} else if (process.env.NODE_ENV === "production") {
    store = productionStore();
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
