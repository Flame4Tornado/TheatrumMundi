import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return ( 
        <div className="card">
            <div className="card__side card__side--front card__side--front-1">
                    <img className='card__picture-front' src={props.watch} alt="Poster"/>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <h2 className="heading-2 card__head">"{props.title}"</h2>
                <span className="card__date">{props.date}</span>
                <p className="card__description">{props.des}</p>
                <div className="card__btn-container">
                    <NavLink  to={props.url} exact activeClassName='active' isActive={isActive.bind(this, props.url)}>
                        <button className="card__btn btn-primary">
                            Zobacz więcej
                        </button> 
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
 
export default Card;