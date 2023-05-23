import { useState } from 'react'
import './App.css'

export function App(){

    return(
        <div className='app'>
            <p>Choose a tool from the navbar</p>
            <div className='navbar'>
                <ul>
                    <li><a href='#'>Row counter</a></li>
                    <li><a href='#'>Row counter with repetitions</a></li>
                    <li><a href='#'>Increase calculator</a></li>
                    <li><a href='#'>Decrease calculator</a></li>
                </ul>
            </div>
        </div>
    )
}