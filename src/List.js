import React from 'react';
import Card from './Card';
import './list.css';

function List(props) {
    const title = props.title;
    const content = props.content;
    const header = props.header;


    <section className='List'>
    <header className='List-header'>
      <h2>{header}</h2>
    </header>
    <div className='List-cards'>
      {props.cards.map((card) =>
        <Card key={card.id} title={card.title} content={card.content}/>
      )}
      <button type='button' className='List-add-button'>Add Random Card</button>
    </div>
  </section>
}

export default List


