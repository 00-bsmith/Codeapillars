import React from 'react';


function Score({currentScore}) {

    return (
        <>
        {/* <div className="container"> */}

            <div className="row">
            {/* <div className="col"><h3 className='score'>Player One:</h3></div> */}
               
                <p style={{fontSize: 25}}>{currentScore}</p>

            </div>

        {/* </div> */}

        </>
    );}

export default Score;