import React from 'react';
import {render} from 'react-dom';
import App from './App'

import note from './notes.txt'

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!', note);
} else {
	console.log('Production');
}

render(<App/>, document.getElementById('root'));