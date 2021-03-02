import { actionType, transcationType } from "../Types/Types";


export const AppReducer = (state:transcationType, action: actionType) => {

    switch (action.type) {
        case 'DELETE_TRANSCATION':
            return{
                ...state,
                transcations: state.transcations
                    .filter((transcation: { id: number; }) =>transcation.id !== action.payload)
            }

        case 'ADD_TRANSCATION':
            return{
                ...state,
                transcations: [action.payload, ...state.transcations]
            }
        default:
            return state;
    };

}