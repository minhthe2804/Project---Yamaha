import { useRoutes } from 'react-router-dom'

import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import { path } from './constants/path'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ForgotPassword from './pages/ForgotPassword'

export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: path.home,
            index: true,
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            )
        },
        {
            path: path.productList,
            element: (
                <MainLayout>
                    <ProductList />
                </MainLayout>
            )
        },
        {
            path: path.register,
            element: (
                <MainLayout>
                    <Register />
                </MainLayout>
            )
        },
        {
            path: path.login,
            element: (
                <MainLayout>
                    <Login />
                </MainLayout>
            )
        },
        {
            path: path.forgotPassword,
            element: (
                <MainLayout>
                    <ForgotPassword />
                </MainLayout>
            )
        },
        {
            path: path.productDetail,
            element: (
                <MainLayout>
                    <ProductDetail />
                </MainLayout>
            )
        }
    ])
    return routeElements
}
