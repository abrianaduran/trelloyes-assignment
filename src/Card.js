import React from 'react';
import './card.css';
import './List.js';

function Card(props){
    const title = props.title;
    const content = props.content;
    return (
        <div className="Card">
            <button type='button'>delete</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card;

