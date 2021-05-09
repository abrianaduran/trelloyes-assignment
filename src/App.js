import React, { Component } from 'react';
import List from './List';
import STORE from './STORE'
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
} 

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}
//const newObjectWithKVPs = omit(objectWithKVPs, 'foo'); 

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardID) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list, 
      cardIDs: list.cardIDs.filter(id => id !== cardID)
    }));

    const newCards = omit(allCards, cardID); 

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listID) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listID) {
        return {
          ...list,
          cardIDs: [...list.cardIDs, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard,
        }
      }
    })
  }

render() {
  const { store } = this.state 
  return (
    <main className='App'>
    <header className='App-header'>
      <h1>Trelloyes!</h1>
    </header>
    <div className='App-list'>
        {store.lists.map(list => (
          <List 
            key={list.id}
            id={list.id}
            header={list.header}
            cards={list.cardIDs.map(id => store.allCards[id])}
            onClickDelete={this.handleDeleteCard}
            onClickAdd={this.handleAddCard}
          />
        ))}
    </div>
    </main>
  )}}

export default App;

//https://jestjs.io/docs/expect#tothrowerror 
//https://github.com/tomatau/trelloyes/tree/master/src 