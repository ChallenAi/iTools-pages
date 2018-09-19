import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';

ReactDOM.render(
    <div>
        <Router />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
