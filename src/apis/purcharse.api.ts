import { PurcharseType } from '~/types/purcharse.type'
import httpPurcharse from '~/utils/httpPurchase'

const URL = '/purcharse'
export const purcharseApi = {
    getPurcharse: () => httpPurcharse.get<PurcharseType[]>(URL),
    buyProducts: (body: PurcharseType) => httpPurcharse.post<PurcharseType>(URL, body)
}
