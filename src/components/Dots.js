import React from 'react';

const Dot = (props) => {
    return ( 
    <div className="dots">
            <span style={props.active? {borderColor: '#574142'}: {borderColor: '#222'}} onClick={props.click} className="dots__content"></span>
    </div> );
}
 
export default Dot;