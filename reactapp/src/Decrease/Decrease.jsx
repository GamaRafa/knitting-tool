import { useState, useEffect } from 'react'
import './Decrease.css'

export function Decrease(){

    const [ total, setTotal ] = useState(0)
    const handleTotalChange = (event) => {
        setTotal(event.target.value)
    }

    const [ decreases, setDecreases ] = useState(0)
    const handleDecreasesChange = (event) => {
        setDecreases(event.target.value)
    }

    let frequency = Math.floor(total / decreases)
    let remainder = total % decreases
    let remainderDistributed    //result of if...else
    let instructions = ''
    
    if (remainder % 2 === 0){   //for even remainder
        remainderDistributed = remainder / 2
        instructions = `Work the first ${remainderDistributed} stitches, *k${frequency - 2}, k2tog* ${decreases} times, work the remaining ${remainderDistributed} stitches.`
        } else {
        remainderDistributed = Math.floor(remainder / 2)    //for odd remainder
        instructions = `Work the first ${remainderDistributed} stitches, *k${frequency - 2}, k2tog* ${decreases} times, work the remaining ${remainderDistributed + 1} stitches.`
        }  

        const [ result, setResult ] = useState()
        const handleClickCalculate = () => {
            setResult(instructions)
        }

    return(
        <div className="container">
            <h2>Decrease calculator</h2>
            <div id="divTotal">
                <label htmlFor="totalStitches" className='label'>Current number of stitches: </label>
                <input type="number" value={total} onChange={handleTotalChange} className='input' id='totalStitches' />
            </div>
            <div id="divDecrease">
                <label htmlFor="decreases" className='label'>Number of stitches to decrease: </label>
                <input type="number" value={decreases} onChange={handleDecreasesChange} className='input' id='decreases' />
            </div>
            <div id="divbtn">
                <button onClick={handleClickCalculate} className='button' id='calculate'>Calculate</button>
            </div>
            <div id="instructions">
                {result}
            </div>
        </div>
    )
}