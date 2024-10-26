export interface User {
    id: string
    name: {
        firstname: string
        lastname: string
    }
    username: string
    email: string
    password: string
    address?: {
        city: string
        district: string
        ward: string
        street: string
    }
    phone?: string
}
