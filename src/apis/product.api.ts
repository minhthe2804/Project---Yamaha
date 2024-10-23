import { Product, ProductsConfig } from '~/types/Products.type'
import httpProduct from '~/utils/HttpProduct'

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
