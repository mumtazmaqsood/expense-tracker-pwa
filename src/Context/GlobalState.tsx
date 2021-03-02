import { createContext, useReducer } from "react";
import { transcationType } from "../Types/Types";

import {AppReducer} from './AppReducer'

/* const intialState:any */
const intialState: any = {
    transcations : [ ]
}

/* type contextProps = {
    transactions: transcationType[]
    addTranscation: (trans: transcationType)=>void,
    delTranscation: (id: number)=>void
}
 */

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
