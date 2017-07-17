import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { getUser } from './actions/user';


// Redux
import { Provider } from 'react-redux';
import { initStore } from './store/store';

const store = initStore();

// Load user
store.dispatch(getUser());

ReactDOM.render( <Provider store={store}>
                 <App />
                 </Provider>,
                 document.getElementById('root'));
registerServiceWorker();
