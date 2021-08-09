import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App';

import UserProvider from './providers/UserProvider';

ReactDOM.render(
	<UserProvider>
		<Application />
	</UserProvider>
  	,
  	document.getElementById('root')
);
