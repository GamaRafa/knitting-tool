import { useState} from 'react'
import './Row-counter.css'

export function RowCounter(){

    const [count, setCount] = useState(0)

    return(
        <div className='container'>
        <h2>Row counter</h2>
            <div id="count">{count}</div>
            <div id="buttons">
                <button id="plus" onClick={() => setCount(count + 1)}>+</button>
                <button id="minus" onClick={() => setCount(count - 1)}>-</button>
                <button id="reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}