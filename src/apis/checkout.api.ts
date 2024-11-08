import { CartType } from '~/types/cart.type'
import httpCheckout from '~/utils/httpCheckout'

const URL = '/checkout'
export const checkoutApi = {
    getCheckout: () => httpCheckout.get<CartType[]>(URL),
    addCheckout: (body: CartType) => httpCheckout.post<CartType>(URL, body)
}
