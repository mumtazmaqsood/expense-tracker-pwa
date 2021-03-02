import { createContext, useReducer } from "react";
import { transcationType } from "../Types/Types";

import {AppReducer} from './AppReducer'

/* const intialState:any */
const intialState: any = {
    transcations : [
        /*
        { transid: 1, item: 'Salary', amount: 50000 },
        { transid: 2, item: 'Books', amount: -500 },
        { transid: 3, item: 'Grocery', amount: -1000 },
        { transid: 4, item: 'Savings', amount: 2000 },
    */
    ]
}

type contextProps = {
    transactions: transcationType[]
    addTranscation: (trans: transcationType)=>void,
    delTranscation: (id: number)=>void
}


export const GlobalContext = createContext<any>(intialState);

export const GlobalProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    const delTranscation = (id:number) => {
        dispatch({
            type: 'DELETE_TRANSCATION',
            payload: id
        });
    }

    function addTranscation(transcation:transcationType){
        dispatch({
            type: 'ADD_TRANSCATION',
            payload: transcation
        });
    }

    return(
        <GlobalContext.Provider value = {
            {transcations : state.transcations,
            delTranscation,
            addTranscation
        }
        }>
            {children}
    </GlobalContext.Provider>
    );
}
