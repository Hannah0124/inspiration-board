import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const BASE_URL = `${props.url}${props.boardName}/cards`

  const[cards, setCards] = useState([]);
  const[errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL)
    .then((response) => {
     const apiData = response.data;
     console.log(apiData);

     const cardObjects = apiData.map((cardWrapper, i) => {
      return {
        id: cardWrapper.card.id,
        text: cardWrapper.card.text,
        emoji: cardWrapper.card.emoji
      }
     });
     setCards(cardObjects);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

  }, []);

  
  
  const cardComponents = cards.map((card, i) => {
    return (
      <Card 
      id={card.id}
      key={i}
      text={card.text}
      emoji={card.emoji}
      />
    );
  });

  return (
    <div>
      {errorMessage && <div><h2>{errorMessage}</h2></div>}
      {cardComponents}
    </div>
  )
};


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
