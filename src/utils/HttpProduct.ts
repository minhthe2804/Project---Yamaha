import axios, { AxiosError, AxiosInstance } from 'axios'

export class HttpProduct {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
                // 'expire-access-token': 5, // 10 giây
                // 'expire-refresh-token': 60 * 60 // 1 giờ
            }
        })
        this.instance.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
        // Add a response interceptor
        this.instance.interceptors.response.use(
            (response) => {
                return response
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )
    }
}
const httpProduct = new HttpProduct().instance
export default httpProduct
