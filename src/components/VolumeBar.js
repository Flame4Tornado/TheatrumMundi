import React from 'react';
import icon from '../img/symbol-defs.svg'

const VolumeBar = (props) => {
    return ( 
        <>
        <div className="controls__volume-bar">
            <svg className="controls__volume-icon">
                <use href={icon + '#icon-volume-medium'}/>
            </svg>
            <input
                type="range"
                className="controls__volume"
                onChange={props.customVolume}
                value={props.volume}
                step={0.1}
                min={0}
                max={1}
            />
        </div>
        
        </>
     );
}
 
export default VolumeBar;