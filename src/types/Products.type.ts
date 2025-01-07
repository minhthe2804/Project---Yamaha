export interface Product {
    description: string
    featured_image: string
    id: number
    images: string[]
    options: {
        name: string
        position: number
        values: string[]
    }
    price: number
    price_max: number
    price_min: number
    title: string
    category: string
    type: string
    vendor: string
    published_at: string
    created_at: string
    quantity: number
}


export interface ProductsConfig {
    page?: number | string
    limit?: number | string
    price_max?: string | number
    price_min?: string | number
    category?: string
    vendor?: string
    type?: string
}
