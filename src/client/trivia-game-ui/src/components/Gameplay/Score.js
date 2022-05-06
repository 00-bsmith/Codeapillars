import React, { useState } from 'react';
import Game from './Game';

function Score() {

    return (
        <>
        <div className="container">

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