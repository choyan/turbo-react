import { createBrowserRouter } from 'react-router-dom';
import { Login, Registration } from './Auth';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
]);
