
import React, { useContext } from 'react';

import {GlobalContext} from '../Context/GlobalState';

export const Balance = () => {

    const {transcations} = useContext(GlobalContext)
    //console.log(transcations)

    const transcationAmounts = transcations.map((trancation: { transcationamount: number; }) => trancation.transcationamount);
    console.log(transcationAmounts)
    const balance = transcationAmounts.reduce( (acc: number, item: number) => (acc += item), 0).toFixed(2);
 
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${balance}</h1>
        </div>
    )
}
