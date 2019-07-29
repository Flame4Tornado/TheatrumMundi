import React from 'react';
import VolumeBar from './VolumeBar';
import PlayButton from './PlayButton';
import TimeBar from './TimeBar';
import TimeDisplay from './TimeDisplay';

const Controls = (props) => {
    return ( 
        <div className="controls">
            <TimeBar
                customTime={props.customTime}
                value={props.currentTime}
                length={props.length}
            />
            <PlayButton 
                play={props.play}
                arr={props.arr}
                icon={props.icon}
            />
            <TimeDisplay 
                formattedTime={props.formattedTime}
                formattedLength={props.formattedLength}
            />
            <VolumeBar 
                volume={props.volume} 
                customVolume={props.customVolume}
            />
        </div>
     );
}
 
export default Controls;
