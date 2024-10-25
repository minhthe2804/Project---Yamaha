import { Auth } from '~/types/auth.type'
import httpAuth from '~/utils/HttpUser'

const URL = '/user'
export const authApi = {
    register: (body: {
        name: { firstname: string; lastname: string }
        username: string
        email: string
        password: string
    }) => {
        return httpAuth.post(URL, body)
    },
    registerAcount: () => httpAuth.get<Auth[]>(URL),
    login: () => httpAuth.get<Auth[]>(URL)
}