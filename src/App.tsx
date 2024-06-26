import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.main.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/router-wrapper.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retryDelay: 3000,
			retry: 1
		}
	}
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<I18nextProvider i18n={i18n}>
				<ThemeProvider theme={customTheme}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<AppRoutes />
					</LocalizationProvider>
					<ToastContainer draggable stacked closeOnClick autoClose={2000} position='top-right' />
					<CssBaseline />
				</ThemeProvider>
			</I18nextProvider>
		</QueryClientProvider>
	);
}

export default App;
