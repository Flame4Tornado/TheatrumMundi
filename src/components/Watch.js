import React from 'react';
import svg from '../img/symbol-defs.svg';

const Watch = (props) => {
    return ( 
        <div className="watch">
            <div className="watch__wrapper">
                <img src={props.src[2]} alt="Poster" className="watch__poster"/>
                <div className="watch__icon-wrapper">
                    <svg onClick={props.handleGallery}>
                        <use href={svg + '#icon-play2'} />
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default Watch;