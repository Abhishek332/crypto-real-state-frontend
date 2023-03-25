import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './app/router'
import ApplyTheme from './app/utils/theme';
import AccountConnector from './app/utils/account-connector';
import ContextProvider from './app/utils/context-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ApplyTheme>
			<AccountConnector>
				<ContextProvider>
					<Router />
				</ContextProvider>
			</AccountConnector>
		</ApplyTheme>
	</React.StrictMode>
);