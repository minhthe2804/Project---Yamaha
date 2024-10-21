// import { createContext, useState } from 'react'

// interface AppContextInterface {
//     blogTop: number
//     setBlogTop: () => void
// }

// const initialAppContext: AppContextInterface = {
//     blogTop: 75,
//     setBlogTop: () => null
// }

// export const AppContext = createContext<AppContextInterface>(initialAppContext)

// export const AppProvider = ({ children }: { children: React.ReactNode }) => {
//     const [blogTop, setBlogTop] = useState<number>(initialAppContext.blogTop)
//     const value = {
//         blogTop,
//         setBlogTop
//     }
//     return <AppContext.Provider value={value}>{children}</AppContext.Provider>
// }
