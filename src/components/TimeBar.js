import React from 'react';

const TimeBar = (props) => {
    return ( 
        <>
        <div className="controls__bar">
            <div className="controls__fill"></div>
            <input
                type="range"
                className="controls__time"
                onChange={props.customTime}
                value={props.currentTime}
                step={0.1}
                min={0}
                max={props.length}
            />
        </div>
        
        </>
     );
}
 
export default TimeBar;