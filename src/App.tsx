import { useContext, useEffect } from 'react'
import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { localStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'
import { useQuery } from '@tanstack/react-query'
import { checkoutApi } from './apis/checkout.api'
import { ExtendedCart } from './types/cart.type'

function App() {
    const routeElements = useRouteElements()

    const { reset, setCheckoutRoute } = useContext(AppContext)

    const { data: productInCheckoutData } = useQuery({
        queryKey: ['checkout'],
        queryFn: () => checkoutApi.getCheckout()
    })

    const productCheckout = productInCheckoutData?.data

    useEffect(() => {
        localStorageEventTarget.addEventListener('clearLS', reset)

        return () => {
            localStorageEventTarget.removeEventListener('clearLS', reset)
        }
    }, [reset])

    useEffect(() => {
        if (productCheckout) {
            setCheckoutRoute(productCheckout as ExtendedCart[])
        }
    }, [productCheckout, setCheckoutRoute])

    return (
        <div>
            {routeElements}
            <ToastContainer />
        </div>
    )
}

export default App
