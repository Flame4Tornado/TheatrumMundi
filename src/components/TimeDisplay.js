import React from 'react';

const TimeDisplay = (props) => {
    return (  
        <span className="controls__time-display">
            <span className="controls__current">{props.formattedTime}</span>
            <span> / </span>
            <span className="controls__length">{props.formattedLength}</span>
        </span>
    );
}
 
export default TimeDisplay;