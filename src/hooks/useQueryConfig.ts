import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'

import useQueryParams from './useQueryParams'
import { ProductsConfig } from '~/types/products.type'

export type QueryConfig = {
    [key in keyof ProductsConfig]: string
}

export default function useQueryConfig() {
    const queryParams: QueryConfig = useQueryParams()
    const queryConfig: QueryConfig = omitBy(
        {
            page: queryParams.page,
            limit: queryParams.limit,
            price_max: queryParams.price_max,
            price_min: queryParams.price_min,
            category: queryParams.category || 'SẢN PHẨM MỚI NHẤT',
            vendor: queryParams.vendor
        },
        isUndefined
    )
    return queryConfig
}
