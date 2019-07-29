import React from 'react';
import { NavLink } from 'react-router-dom';

const Slide = (props) => {

    const url = `/news/article/${props.number}` 
    return (  
        <div className="slide">
            <NavLink  to={url}>
                <div className="slide__wrapper"></div>
                <h1 className="slide__head">{props.news.title}</h1>
                <span className="slide__date">{props.news.date}</span>
                <img src={props.news.photo} alt="News" className="slide__picture"/>
            </NavLink>
        </div>
    );
}
 
export default Slide;