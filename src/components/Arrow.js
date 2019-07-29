import React from 'react';

const Arrow = (props) => {
    return ( 
    <div className="arrow" onClick={props.click}>
            <svg className="arrow__content"  >
                <use href={props.side? `${props.arr}#icon-chevron-thin-left`: `${props.arr}#icon-chevron-thin-right`} />
            </svg>
    </div> );
}
 
export default Arrow;