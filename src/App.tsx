import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ErrorBoundary from './hoc/ErrorBoundary.tsx';
import i18n from './locales/i18n';
import AppRoutes from './routes/router-wrapper.tsx';
import './styles/main.styles.css';
import './styles/tailwind.styles.css';
import customTheme from './themes/common.d';

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
						<ErrorBoundary>
							<AppRoutes />
						</ErrorBoundary>
					</LocalizationProvider>
					<ToastContainer autoClose={2000} position='top-right' closeOnClick draggable stacked />
					<CssBaseline />
				</ThemeProvider>
			</I18nextProvider>
		</QueryClientProvider>
	);
}

export default App;
