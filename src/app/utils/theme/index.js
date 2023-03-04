import { ThemeProvider, createTheme } from '@mui/material/styles';
import {cssBaselineClasses} from '../material-ui/css-baseline-util'

const darkTheme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'&.Mui-disabled': {
					cursor: 'not-allowed !important',
					pointerEvents: 'all !important',
				},
				MuiCssBaseline: cssBaselineClasses,
			},
		},
	},
	palette: {
		mode: 'dark',
		primary: {
			main: '#1976d2',
		},
	},
	typography: {
		fontFamily: 'Lato, Source Sans Pro, sans-serif',
	},
});

const ApplyTheme = ({ children }) => (
	<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);

export default ApplyTheme;
