import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
		fontSize: '1rem'
	},
});

const ApplyTheme = ({ children }) => (
	<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);

export default ApplyTheme;
