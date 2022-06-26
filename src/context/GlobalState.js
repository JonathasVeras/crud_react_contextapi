import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    users: [
        {id: 1, name: 'Usuario Um'},
        {id: 2, name: 'Usuario Dois'},
        {id: 3, name: 'Usuario Três'}, 
    ]
}

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispach] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={{users: state.users}}>
            {children}
        </GlobalContext.Provider>
    )
}