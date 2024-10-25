export interface Auth {
    id: string
    name: {
        firstname: string
        lastname: string
    }
    username: string
    email: string
    password: string
}

export type RegisterAccount = {
    name: {
        firstname: string
        lastname: string
    }
    username: string
    email: string
    password: string
}
