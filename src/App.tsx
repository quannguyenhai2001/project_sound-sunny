import { CssBaseline, ThemeProvider } from '@mui/material';
import customTheme from './themes/theme.main.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/router-wrapper.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retryDelay: 3000,
			retry: 1
			// staleTime: 2000,
			// refetchOnMount: false
		}
	}
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ThemeProvider theme={customTheme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<AppRoutes />
				</LocalizationProvider>
				<ToastContainer draggable stacked closeOnClick autoClose={2000} position='top-right' />
				<CssBaseline />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
