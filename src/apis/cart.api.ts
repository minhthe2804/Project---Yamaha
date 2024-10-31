import { CartType } from '~/types/cart.type'
import httpCart from '~/utils/httpCart'

const URL = '/cart'
export const cartApi = {
    addToCart: (body: CartType) => httpCart.post<CartType>(URL, body),
    getCart: () => httpCart.get<CartType[]>(URL)
}
