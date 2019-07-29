import React from 'react';

const Screen = (props) => {
    return (
        <video onTimeUpdate={props.timeUpdate} className='full-screen__video' >
            <source src={props.src} type='video/mp4'/>
        </video>  
        );
}
 
export default Screen;