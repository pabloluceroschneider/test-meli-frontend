import { createContext } from 'react';

export const AppContext = createContext();

export const initialState = {
    response: null,
    categories: JSON.parse( localStorage.getItem("categories") )
}

const CONSTANST = {
    SET_RESPONSE: "setResponse",
    SET_CATEGORIES: "setCategories",
}

const handleActions = {
    [CONSTANST.SET_RESPONSE] : (store, action) => ({
        ...store,
        response: action.payload.data
    }),
    [CONSTANST.SET_CATEGORIES] : (store, action) => {
        if (!action.payload){
            localStorage.setItem("categories", JSON.stringify([]))
            return {
                ...store,
                categories: []
            }
        }
        localStorage.setItem("categories", JSON.stringify(action.payload))
        return {
            ...store,
            categories: action.payload
        }
    }
}

export const reducer = (store, action) =>
    Boolean(handleActions[action.type]) 
    ? handleActions[action.type](store, action) 
    : store

export const ACTIONS = {
    setResponse : payload => ({type: CONSTANST.SET_RESPONSE, payload}),
    setCategories : payload => ({type: CONSTANST.SET_CATEGORIES, payload}),
}