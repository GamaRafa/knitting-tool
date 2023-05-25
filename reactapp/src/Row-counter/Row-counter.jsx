import { useState, useEffect} from 'react'
import './Row-counter.css'

export function RowCounter(){
    useEffect(() => {
    const plus = document.getElementById('plus')
    const count = document.getElementById('count')
    const minus = document.getElementById('minus')
    const reset = document.getElementById('reset')


        let num = 0
        count.innerHTML = num
    
        plus.onclick = function (){
            count.innerHTML++
        }
    
        minus.onclick = function (){
            count.innerHTML--
        }
    
        reset.onclick = function (){
            count.innerHTML = 0
        }
    }, [])

    return(
        <div className='container'>
            <div id="count"></div>
            <button id="plus">+</button>
            <button id="minus">-</button>
            <button id="reset">Reset</button>
        </div>
    )
}