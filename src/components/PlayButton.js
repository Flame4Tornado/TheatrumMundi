import React from 'react';

const PlayButton = (props) => {
    return ( 
        <div className="controls__buttons">
            <button onClick={props.play} className="controls__play" id='play-pause'>
                <svg>
                    <use href={props.arr + props.icon} />
                </svg>
            </button>
        </div>
     );
}
 
export default PlayButton;