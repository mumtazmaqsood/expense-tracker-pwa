import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';



export const Transcation = ({transcation}:any) => {
        
        const sign = transcation.transcationamount > 0 ? '+':'-';

        const transcationType = transcation.transcationamount > 0 ? "plus": "minus";

        const { delTranscation } = useContext(GlobalContext)
    return (
            <li className= {transcationType}>
                {transcation.description}
                <span>{sign}${Math.abs(transcation.transcationamount)}</span>
                <button className="delete-btn" onClick={ ()=> delTranscation(transcation.id)}>X</button>
            </li>
    )
}
