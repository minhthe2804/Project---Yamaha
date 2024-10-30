import { Auth } from '~/types/auth.type'
import httpAuth from '~/utils/httpUser'

const URL = '/user'
export const authApi = {
    register: (body: {
        name: { firstname: string; lastname: string }
        username: string
        email: string
        password: string
    }) => {
        return httpAuth.post<Auth>(URL, body)
    },
    registerAcount: () => httpAuth.get<Auth[]>(URL),
    login: () => httpAuth.get<Auth[]>(URL),
    forgotPassword: (
        id: string,
        body: {
            name: { firstname: string; lastname: string }
            username: string
            email: string
            password: string
        }
    ) => httpAuth.put<Auth>(`${URL}/${id}`, body)
}
