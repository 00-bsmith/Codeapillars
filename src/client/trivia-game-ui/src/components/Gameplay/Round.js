import React, { useState } from 'react';
import Game from './Game';
import Timer from '../Clock/Timer';

function Round() {

    const [counter, setCounter] = useState(1);

    return (
        <>
        <div className="container1">

            <div className="row">
                {/* need to make this dynamic */}

               <div className="col"><h1 className='round'> 
               {/* this isn't working here. need to grab round from Timer, and display it here to be passed to Game.js */}
                {/* {(Timer.counter.valueOf()).toString()} */}
                </h1></div>
                
            </div>


        </div>
        </>
    );}

export default Round;