import React from 'react';


function Score(props) {

    return (
        <>
        {/* <div className="container"> */}

            <div className="row">
            {/* <div className="col"><h3 className='score'>Player One:</h3></div> */}
               
                <p style={{fontSize: 25}}>{props.currentScore}</p>

            </div>

        {/* </div> */}

        </>
    );}

export default Score;