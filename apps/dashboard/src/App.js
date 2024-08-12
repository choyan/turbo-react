import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Button, Input } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import ErrorBoundary from './ErrorBoundary';

const queryClient = new QueryClient();

export function App() {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <ConfigProvider>
                    <RouterProvider router={router} />
                </ConfigProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}
