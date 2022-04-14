// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";
import { PortfolioType } from "../types/InfosTypes";

const initialData: PortfolioType = {
    name: 'Dashboard',
    desc: 'Site feito em programação',
    link: 'https://yagrrusso.github.io/',
    img: '',
    stacks: [
        'react',
        'typescript',
        'styled-components',
        'router-dom'
    ]
}

// Types
type ActionType = {
    type: PortfolioActions,
    payload: any
}

type ContextType = {
    state: PortfolioType,
    dispatch: (action: ActionType) => void
}

type ProviderType = {
    children: ReactNode
}

// Context
const PortfolioContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum PortfolioActions {
    setName,
    setDesc,
    setLink,
    setImg,
    setStacks
}
const portfolioReducer = (state: PortfolioType, action: ActionType) => {
    switch (action.type) {
        case PortfolioActions.setName:
            return { ...state, name: action.payload }
        case PortfolioActions.setDesc:
            return { ...state, desc: action.payload }
        case PortfolioActions.setLink:
            return { ...state, link: action.payload }
        case PortfolioActions.setImg:
            return { ...state, img: action.payload }
        case PortfolioActions.setStacks:
            return { ...state, stacks: action.payload }
        default:
            return state
    }
}

// Provider
export const PortfolioProvider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(portfolioReducer, initialData)
    const value = { state, dispatch }

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    )
}

// Hook
export const usePortfolio = () => {
    const context = useContext(PortfolioContext)
    if (context === undefined) {
        throw new Error('Erro')
    }
    return context
}