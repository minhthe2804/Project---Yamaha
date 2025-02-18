/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { useContext } from 'react'

import MainLayout from './Layouts/MainLayout'
import { path } from './constants/path'
import { AppContext } from './contexts/app.context'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Checkout from './pages/Checkout'
import Introduce from './pages/Introduce'
import Contact from './pages/Contact'
import Address from './pages/Checkout/pages/Address'
import Payment from './pages/Checkout/pages/Payment'
import ThankYou from './pages/Checkout/pages/ThankYou'
import AccountOder from './pages/Account/pages/AccountOder'
import ChangePassword from './pages/Account/pages/ChangePassword'
import UpdateProfile from './pages/Account/pages/UpdateProfile'

function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

function CheckoutRoute() {
    const { isCheckout } = useContext(AppContext)
    return isCheckout ? <Outlet /> : <Navigate to={path.cart} />
}

function AddressRoute() {
    const { isAddress } = useContext(AppContext)
    return isAddress ? <Outlet /> : <Navigate to={path.checkoutAddress} />
}

function ThankyouRoute() {
    const { isThankyou } = useContext(AppContext)
    return isThankyou ? <Outlet /> : <Navigate to={path.checkoutPayment} />
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
                    ),
                    children: [
                        {
                            path: path.accountOder,
                            element: <AccountOder />
                        },
                        {
                            path: path.changePassword,
                            element: <ChangePassword />
                        },
                        {
                            path: path.updateProfile,
                            element: <UpdateProfile />
                        }
                    ]
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
                                        },
                                        {
                                            path: '',
                                            element: <ThankyouRoute />,
                                            children: [
                                                {
                                                    path: path.checkoutThankYou,
                                                    element: <ThankYou />
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
        },
        {
            path: path.contact,
            element: (
                <MainLayout>
                    <Contact />
                </MainLayout>
            )
        }
    ])
    return routeElements
}
