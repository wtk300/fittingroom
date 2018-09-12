import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers'

const store = createStore(rootReducers);
render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
