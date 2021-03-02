
import React, { useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState';
import { Transcation } from './Transcation';


type transHistory = {
    id: number,
    transcation: number
}

export const TranscationHistory:React.FC<any> = () => {
    const {transcations} = useContext(GlobalContext);
    return (
        <div>
            <h3>Transcation History</h3>
            <ul className="list">
                { transcations.map( (transcation: { id: number; }) => (
                    <Transcation key={transcation.id} transcation = {transcation} />
                ))   
                }
            </ul>
        </div>
    )
}

