import AuthPage from "../Pages/AuthPage";
import MainPage from "../Pages/MainPage";
import ProductPage from "../Pages/ProductPage";

export const MAIN_ROUTE = '/';
export const AUTH_ROUTE = '/auth';
export const PRODUCT_ROUTE = '/product';

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: AUTH_ROUTE,
        element: <AuthPage/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <ProductPage/>
    }
]
