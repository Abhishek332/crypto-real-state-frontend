import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router'
import ApplyTheme from './utils/theme';
import AccountConnector from './utils/account-connector';
import ContextProvider from './utils/context-provider';

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