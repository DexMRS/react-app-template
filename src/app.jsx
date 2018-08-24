import React from 'react';
import ReactDom from 'react-dom';

//redux
import {Provider} from 'react-redux';
import store from './store/store';

let app = document.getElementById('app');

ReactDom.render(
  <h1>Privet> all ok</h1>
  , app);
