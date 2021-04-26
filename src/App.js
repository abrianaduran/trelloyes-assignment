import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './store'

class App extends React.Component {
  render() {
  return <main>
    <header>
      <h1>Trelloyes</h1>
    </header>
    <div className="App-list">
      {store.lists.map(list => (
        <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])}></List>
      ))}

    </div>
  </main>
  
  }
  
}

export default App;

