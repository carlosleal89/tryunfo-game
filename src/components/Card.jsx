import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card-section">
        <p>Nome</p>
        <p data-testid="name-card">
          { cardName }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          className="img-class"
          data-testid="image-card"
        />
        <p>Descrição</p>
        <p data-testid="description-card">
          { cardDescription }
        </p>
        Força
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        Destreza
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        Agilidade
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
