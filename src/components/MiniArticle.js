import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniArticle = (props) => {
    return ( 
    <div className="miniarticle">
        <figure className="miniarticle__img-wrap">
            <img src={props.news.photo} alt="MiniArticle" className="miniarticle__img"/>
        </figure>
        <h3 className="miniarticle__head">{props.news.title}</h3>
        <p className="miniarticle__text">{props.news.article.slice(0, 300)}...</p>
        <div className="miniarticle__btn-wrap">
            <NavLink to={`/news/article/${props.number}`}>
            <button className="miniarticle__btn">Czytaj dalej &rarr;</button>
            </NavLink>
        </div>
    </div> );
}
 
export default MiniArticle;