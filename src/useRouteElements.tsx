import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { useContext } from 'react'

import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import { path } from './constants/path'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ForgotPassword from './pages/ForgotPassword'
import Cart from './pages/Cart'
import Account from './pages/Account'
import { AppContext } from './contexts/app.context'
import Checkout from './pages/Checkout'
import Introduce from './pages/Introduce'
import Address from './pages/Checkout/pages/Address'
import Payment from './pages/Checkout/pages/Payment'

// eslint-disable-next-line react-refresh/only-export-components
function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

// eslint-disable-next-line react-refresh/only-export-components
function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

// eslint-disable-next-line react-refresh/only-export-components
function CheckoutRoute() {
    const { isCheckout } = useContext(AppContext)
    return isCheckout ? <Outlet /> : <Navigate to={path.cart} />
}

// eslint-disable-next-line react-refresh/only-export-components
function AddressRoute() {
    const { isAddress } = useContext(AppContext)
    return isAddress ? <Outlet /> : <Navigate to={path.checkoutAddress} />
}

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
            path: '',
            element: <RejectedRoute />,
            children: [
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
                }
            ]
        },
        {
            path: path.productDetail,
            element: (
                <MainLayout>
                    <ProductDetail />
                </MainLayout>
            )
        },
        {
            path: '',
            element: <ProtectedRoute />,
            children: [
                {
                    path: path.cart,
                    element: (
                        <MainLayout>
                            <Cart />
                        </MainLayout>
                    )
                },
                {
                    path: path.account,
                    element: (
                        <MainLayout>
                            <Account />
                        </MainLayout>
                    )
                },
                {
                    path: '',
                    element: <CheckoutRoute />,
                    children: [
                        {
                            path: path.checkout,
                            element: <Checkout />,
                            children: [
                                {
                                    path: '',
                                    element: <Outlet />,
                                    children: [
                                        {
                                            path: path.checkoutAddress,
                                            element: <Address />
                                        },
                                        {
                                            path: '',
                                            element: <AddressRoute />,
                                            children: [
                                                {
                                                    path: path.checkoutPayment,
                                                    element: <Payment />
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: path.introduce,
            element: (
                <MainLayout>
                    <Introduce />
                </MainLayout>
            )
        }
    ])
    return routeElements
}
