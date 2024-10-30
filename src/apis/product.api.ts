import { Product, ProductsConfig } from '~/types/products.type'
import httpProduct from '~/utils/httpProduct'

const URL = '/products'
const productApi = {
    getProduct: (params: ProductsConfig) => {
        return httpProduct.get<Product[]>(URL, {
            params
        })
    },
    getProductDetail: (id: string) => {
        return httpProduct.get<Product>(`${URL}/${id}`)
    }
}

export default productApi
