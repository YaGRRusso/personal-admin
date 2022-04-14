// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext } from "react";

const initialData = {
    name: ''
}

// Context
const UserContext = createContext(undefined);

// Reducer
enum UserActions {
    setName,
    setOffice,
    setBirth,
    setAge,
    setEmail,
    setPhone,
    setAddress
}
const userReducer = (state, action) => {
    switch (action.type) {
        case UserActions.setName:
            return { ...state, name: action.payload }
        default:
            return state
    }
}

// Provider
type UserProviderProps = {
    children: ReactNode
}
const UserProvider = ({ children }) => {
    const [state, dispatch] = userReducer(userReducer, initialData)
    const value = { state, dispatch }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// Hook
export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('Erro')
    }
    return context
}