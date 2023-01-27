import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

import '@/assets/styles/global.scss';

import AuthProvider from '@/providers/auth-provider/AuthProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
