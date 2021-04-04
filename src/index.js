import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configStore from './redux/store/store';

 const reduxStore = configStore();
 

ReactDOM.render(
<Provider store={reduxStore}>  

<App />

</Provider> , 
document.getElementById('root'));

serviceWorker.unregister();
