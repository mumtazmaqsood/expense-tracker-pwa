
/* export type initTranscation = {
    transcations: transcationType[]
} */


export type transcationType = {
    id: number,
    description: string,
    transcationamount: number,
    transcations: any
}


export type actionType = 
    | { type: 'ADD_TRANSCATION', payload: transcationType }
    | { type: 'DELETE_TRANSCATION', payload: number }

