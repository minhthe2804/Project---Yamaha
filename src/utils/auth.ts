import { User } from '~/types/user.type'

export const localStorageEventTarget = new EventTarget()

export const setLoginSuccess = (login_success: string) => {
    localStorage.setItem('login_success', login_success)
}

export const getLoginSuccess = () => localStorage.getItem('login_success') || ''

export const getProfileFromLS = () => {
    const result = localStorage.getItem('profile')
    return result ? JSON.parse(result) : null
}

export const setProfileFromLS = (profile: User) => {
    localStorage.setItem('profile', JSON.stringify(profile))
}

export const clearLS = () => {
    localStorage.removeItem('login_success')
    localStorage.removeItem('profile')
    const clearLSEvent = new Event('clearLS')
    localStorageEventTarget.dispatchEvent(clearLSEvent)
}
