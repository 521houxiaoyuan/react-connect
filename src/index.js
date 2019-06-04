import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Provider from './utils/provider';
import Index from './components/index';
import {stores} from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={stores} >
<Index />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
