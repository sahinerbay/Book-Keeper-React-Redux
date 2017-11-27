import React from 'react';
import {render} from 'react-dom';

import App from './components/app';

import bookApp from './reducers/index';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(bookApp);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));