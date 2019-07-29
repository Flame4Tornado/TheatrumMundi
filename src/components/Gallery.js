import React from 'react';

const Gallery = (props) => {
    return (
    <div className="gallery">
        <div className="gallery__wrapper">
            <h2 className="heading-2 gallery__head">Galeria</h2>
            <div className="gallery__img-wrap" onClick={props.handleGallery}>
                <img src={props.src[0]} alt="Gallery" className="gallery__img gallery__img--1"/>
            </div>
        </div>
    </div>
    );
}

 
export default Gallery;