import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={ () => props.onClickDelete(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
Card.propTypes = {
  onClickDelete: () => {}
}
//https://github.com/tomatau/trelloyes/compare/93030a39b01d5e2100cbf99373714d243163cab2..53e1b5cb864ed5c954ada3511e3d8a69041f3074