import { useState } from 'react'
import './App.css'

import fabric from '../icons/fabric.png'
import minus from '../icons/minus.png'
import plus from '../icons/plus.png'
import row_counter from '../icons/row-counter.png'
import row_rep from '../icons/row-rep.png'

export function App(){

    return(
        <div className='app'>
            <p>Choose a tool from the navbar</p>
            <div className='navbar'>
                <ul>
                    <li>
                        <a href='#' className='active'>
                            <span className='icon'><img src={fabric} alt="" /></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span className='icon'><img src={row_counter} alt="" /></span>
                            <span>Row counter</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span className='icon'><img src={row_rep} alt="" /></span>
                            <span>Row counter with repetitions</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className='icon'><img src={plus} alt="" /></span>
                            <span>Increase calculator</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className='icon'><img src={minus} alt="" /></span>
                            <span>Decrease calculator</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}