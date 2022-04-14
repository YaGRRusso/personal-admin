// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";
import { PersonalType } from "../types/InfosTypes";

const initialData: PersonalType = {
    name: 'Yago Russo',
    office: 'Desenvolvedor Frontend',
    age: 20,
    birth: new Date('30/11/2001'),
    phone: '51986824203',
    email: 'yagrrusso@gmail.com',
    address: {
        postal: '94120380',
        state: {
            long: 'Rio Grande do Sul',
            short: 'RS'
        },
        city: 'Gravataí',
        country: 'Brasil',
    }
}

// Types
type ActionType = {
    type: UserActions,
    payload: any
}

type ContextType = {
    state: PersonalType,
    dispatch: (action: ActionType) => void
}

type ProviderType = {
    children: ReactNode
}

// Context
const UserContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum UserActions {
    setName,
    setOffice,
    setBirth,
    setAge,
    setEmail,
    setPhone,
    setAddress
}
const userReducer = (state: PersonalType, action: ActionType) => {
    switch (action.type) {
        case UserActions.setName:
            return { ...state, name: action.payload }
        case UserActions.setOffice:
            return { ...state, office: action.payload }
        case UserActions.setBirth:
            return { ...state, birth: action.payload }
        case UserActions.setAge:
            return { ...state, age: action.payload }
        case UserActions.setEmail:
            return { ...state, email: action.payload }
        case UserActions.setPhone:
            return { ...state, phone: action.payload }
        case UserActions.setAddress:
            return { ...state, address: action.payload }
        default:
            return state
    }
}

// Provider
export const UserProvider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(userReducer, initialData)
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