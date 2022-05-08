import React from 'react';
import { render } from 'react-dom';
import Timer from '../Clock/Timer';

const Round = ({round}) =>  {
// I don't think {round} goes inside of the ()
   
    return (
        <>
        <div>
           <p>42</p>
           <div>
             {/* {{round}} */}
            </div>
        </div>
        </>
    );
   

}

export default Round;