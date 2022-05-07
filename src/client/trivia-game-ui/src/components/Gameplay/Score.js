import React, { useState } from 'react';
import Game from './Game';

function Score() {

    return (
        <>
        <div className="container">


{/* We need to grab the score from Timer.js and pass it here to be put into an array.  Add previous score to incoming score and display. First round would be zero plus the current score = total score. */}
            <div className="row">
                <div className="col"><h3 className='score'>Player One</h3></div>
                {/* need to make the score dynamic */}
                <div className="col"><h3 className='score'>30,000</h3></div>
            </div>

            <div className="row">
                <div className="col"><h3 className='score'>Player Two</h3></div>
                {/*need to make the score dynamic & player 2 show up only if there is a 2nd player*/}
                <div className="col"><h3 className='score'>25,982</h3></div>
            </div>

        </div>
        </>
    );}

export default Score;