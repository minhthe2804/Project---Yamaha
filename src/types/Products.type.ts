export interface Product {
    available: boolean
    compare_at_price_max: number
    compare_at_price_min: number
    compare_at_price_varies: boolean
    compare_at_price: number
    content: null
    description: string
    featured_image: string
    handle: string
    id: string
    images: string[]
    media: {
        alt: null
        id: number
        position: number
        preview_image: {
            src: string
        }
        external_id: null
        host: null
        media_type: string
        src: string
    }[]
    options: {
        name: string
        position: number
        values: string[]
    }[]
    price: number
    price_max: number
    price_min: number
    price_varies: boolean
    tags: never[]
    template_suffix: null
    title: string
    category: string
    type: string
    url: string
    pagetitle: string
    metadescription: string
    variants: {
        id: number
        barcode: null
        available: boolean
        price: number
        sku: null
        option1: string
        option2: string
        option3: string
        options: string[]
        inventory_quantity: number
        old_inventory_quantity: number
        title: string
        weight: number
        compare_at_price: number
        inventory_management: string
        inventory_policy: string
        selected: boolean
        url: null
        featured_image: {
            id: number
            position: number
            src: string
            alt: null
            variant_ids: number[]
        }
        vendor: string
        published_at: string
        created_at: string
        not_allow_promotion: boolean
        sole_quantity: number
    }
}

export interface ProductsConfig {
    page?: number | string
    limit?: number | string
    price_max?: string | number
    price_min?: string | number
    category?: string
    vendor?: string
}
