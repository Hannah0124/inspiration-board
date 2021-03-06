import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ChangeBoardNameBtn from './components/ChangeBoardNameBtn';

const App = () => {
  const [boardName, setBoardName] = useState('kitty');

  const changeBoardName = (newBoardName) => {
    setBoardName(newBoardName);
  };

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={boardName}
      />
      <ChangeBoardNameBtn 
        changeBoardNameCallback={changeBoardName}
        boardName={boardName}
      />
    </section>
  );
};

export default App;
