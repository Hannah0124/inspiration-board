import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const removeCardBtn = () => {
    console.log('you just clicked the delete button!!');
    props.deleteCardCallback(props.id);
  }

  return (
    <div className="card">
      <section className="card__content">
        <p className="card__content-text">{props.text && props.text}</p>
        <span className="card__content-emoji">{props.emoji && emoji.getUnicode(props.emoji)}</span>
        <button className="card__delete" onClick={removeCardBtn}>Delete</button>
      </section>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,  
};

export default Card;
