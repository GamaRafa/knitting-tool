import { useEffect, useState } from 'react'
import './App.css'

import { Home } from '../Home/Home.jsx'
import { RowCounter } from '../Row-counter/Row-counter.jsx'

import fabric from '../icons/fabric.png'
import minus from '../icons/minus.png'
import plus from '../icons/plus.png'
import row_counter from '../icons/row-counter.png'
import row_rep from '../icons/row-rep.png'

export function App(){
    const [ showHome, setShowHome ] = useState(false)
    const [ showCounter, setShowCounter] = useState(false)

    const handleClickHome = () => {
        setShowHome(true)
        setShowCounter(false)
    }
    const handleClickCounter = () => {
        setShowHome(false)
        setShowCounter(true)
    }

    return(
        <div className='app'>
            <h2>Choose a tool from the navbar</h2>
            <div className='navbar'>
                <ul>
                    <li>
                        <a onClick={handleClickHome} href='#'>
                            <span className='icon'><img src={fabric} alt="" /></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClickCounter} href='#'>
                            <span className='icon'><img src={row_counter} alt="" /></span>
                            <span>Row counter</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span className='icon'><img src={row_rep} alt="" /></span>
                            <span>Repetitions counter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon'><img src={plus} alt="" /></span>
                            <span>Increase calculator</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon'><img src={minus} alt="" /></span>
                            <span>Decrease calculator</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='content'>
                {showHome && <Home />}
                {showCounter && <RowCounter />}
            </div>
        </div>
    )
}