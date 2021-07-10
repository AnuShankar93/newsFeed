import React from 'react';
import './card.scss';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const { abstract, headline, section_name} = props.data;
    return (
        <NavLink to='/detail'>
            <div className="card-wrapper">
                <span className="news-type"> {section_name}</span>
                <h3 className="title">
                   {headline.main}
                </h3>
                <div className="new-desc">
                    {abstract}
                </div>
            </div>
        </NavLink>

    )
}

export default Card;
