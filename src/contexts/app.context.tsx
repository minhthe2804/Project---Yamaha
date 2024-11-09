import { createContext, useState } from 'react'
import { ExtendedCart } from '~/types/cart.type'
import { User } from '~/types/user.type'
import { getCheckoutFromLS, getLoginSuccess, getProfileFromLS } from '~/utils/auth'

interface AppContextInterface {
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    isCheckout: boolean
    setIsCheckout: React.Dispatch<React.SetStateAction<boolean>>
    profile: User | null
    setProfile: React.Dispatch<React.SetStateAction<User | null>>
    extendedCart: ExtendedCart[]
    setExtendedCart: React.Dispatch<React.SetStateAction<ExtendedCart[]>>
    reset: () => void
}

const initialAppContext: AppContextInterface = {
    isAuthenticated: Boolean(getLoginSuccess()),
    setIsAuthenticated: () => null,
    isCheckout: Boolean(getCheckoutFromLS()),
    setIsCheckout: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null,
    extendedCart: [],
    setExtendedCart: () => null,
    reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
    const [isCheckout, setIsCheckout] = useState<boolean>(initialAppContext.isCheckout)
    const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
    const [extendedCart, setExtendedCart] = useState<ExtendedCart[]>(initialAppContext.extendedCart)
    const reset = () => {
        setIsAuthenticated(false)
        setProfile(null)
        setIsCheckout(false)
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        isCheckout,
        setIsCheckout,
        profile,
        setProfile,
        extendedCart,
        setExtendedCart,

        reset
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
