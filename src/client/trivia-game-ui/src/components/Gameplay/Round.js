import React, { useState } from 'react';
import Game from './Game';

function Round() {

    return (
        <>
        <div className="container1">

            <div className="row">
                {/* need to make this dynamic */}
                <div className="col"><h1 className='round'>1</h1></div>
            </div>
            {/* <div className="row">
                <div className="col"><h1 className='round'>6 to go</h1></div> 
            </div> */}

        </div>
        </>
    );}

export default Round;