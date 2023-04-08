import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cardsArray: [],
  };

  // criar um evento para quando passar o mouse em cima do botão salvar desabilitado, ele mostrar um mensagem informando quais campos faltam preencher
  errorHandler = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const MAX_ATTR_VAL = 90;
    const MAX_TOTAL_ATTR_VAL = 210;
    const valCardName = cardName.length > 0; // atribui um valor boolean a cada const.
    const valCardDescription = cardDescription.length > 0;
    const valCardImage = cardImage.length > 0;
    const valCardRare = cardRare.length > 0;
    const valAttr1 = (Number(cardAttr1) >= 0 && Number(cardAttr1) <= MAX_ATTR_VAL);
    const valAttr2 = (Number(cardAttr2) >= 0 && Number(cardAttr2) <= MAX_ATTR_VAL);
    const valAttr3 = (Number(cardAttr3) >= 0 && Number(cardAttr3) <= MAX_ATTR_VAL);
    const valMaxAttrVal = (
      (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= MAX_TOTAL_ATTR_VAL)
    );
    const valInputs = (valCardName && valCardDescription && valCardImage && valCardRare);
    const valAttr = (
      valAttr1 && valAttr2 && valAttr3 && valCardDescription && valMaxAttrVal
    );

    this.setState({
      isSaveButtonDisabled: !(
        valInputs && valAttr // se todas const retornarem true, o botão vai ser habilitado( a logica ta invertida pelo ! antes da expressão )
      ),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.errorHandler);
  };

  saveButton = () => {
    const card = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsArray: [...prevState.cardsArray, card],
    }));
  };

  deleteButton = (index) => {
    const { cardsArray } = this.state;
    const updateArray = cardsArray;
    updateArray.splice(index, 1);
    this.setState({
      cardsArray: updateArray,
      hasTrunfo: cardsArray.some(({ cardTrunfo }) => cardTrunfo),
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardsArray,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main className="main-section">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.saveButton }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
        {
          cardsArray.map((card, index) => (
            <div className="card" key={ index }>
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                onClick={ () => this.deleteButton(index) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
