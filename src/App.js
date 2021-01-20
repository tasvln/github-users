import React, { useState } from 'react'
import Cards from './components/Cards'
import Search from './components/Search'

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div className="App">
      <Search onSubmit={addNewCard} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
