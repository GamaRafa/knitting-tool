import { useState } from 'react'
import './Row-rep.css'

export function RowRep(){

    const [ count, setCount ] = useState(0)
    const [ rep, setRep ] = useState(0)
    const [ rowsPerRep, setRowsPerRep ] = useState(0)

    if ( count > rowsPerRep ){
        setRep(rep + 1)
        setCount(0)
    }


    return(
        <div className='container'>
            <h2>Row counter with Repetitions</h2>
            <div id="rows-rep">
                <label htmlFor="rows-per-rep" className='label'>Number of stitches per row</label>
                <input type="number" value={rowsPerRep} onChange='' id="rows-per-rep" />
            </div>
            <div id="count">Row {count} on pattern repetition {rep} </div>
            <div id="buttons">
                <button id="plus" onClick={() => setCount(count + 1)}>+</button>
                <button id="minus" onClick={() => setCount(count - 1)}>-</button>
                <button id="reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}