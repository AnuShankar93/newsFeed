import React from 'react';
import './feature.scss'
const FeaturedCard = (props) => {
    const {abstract, section_name, headline, multimedia} = props.data;
    return (
        <li className="card">
            <div className="image-content">
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className="content">
                <span className="type">{section_name}</span>
                <h3 className="title">{headline.main}</h3>
                <div className ="desc">
                    {abstract}
                </div>
            </div>
        </li>
    )
}

export default FeaturedCard;