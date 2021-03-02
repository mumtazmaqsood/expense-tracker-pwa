import React, { FC, useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { transcationType } from '../Types/Types';

type addNewTrans = {
    description: string,
    transcationamount: number
}

export const AddTranscation:React.FC<any> = () => {
    const [description, setDescription] = useState<string>('');
    const [transcationAmount, setTranscationAmount] = useState<number>(0);

    const {addTranscation} = useContext(GlobalContext);
    const onSubmit = (e:any) => {
        e.preventDefault();

        const newTranscation = {
            id: new Date().getTime(), 
            description, 
            transcationamount: +transcationAmount
        }
        console.log(newTranscation);

        addTranscation(newTranscation);
        
    }


    return (
        
        <div>
            <h3>Add New Transcation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    id="description"
                    value = {description}
                    onChange = { (e) => setDescription(e.target.value)}
                     placeholder="Details of Transcation"/>
                </div>

                <div className="form-control">
                    <label htmlFor="transcationamount">Transcation Amount</label>
                    <input type="number" 
                    id="transcationamount"
                    value = {transcationAmount} 
                    onChange = { (e) => setTranscationAmount(parseInt(e.target.value))}
                    placeholder="Enter Transcation amount" />

                </div>
                <button className="btn"> Add Transcation</button>
            </form>
        </div>
    )
}
