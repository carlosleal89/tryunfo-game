import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
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
    const valCardRare = cardRare !== 'normal';
    const valAttr1 = (Number(cardAttr1) >= 0 && Number(cardAttr1) <= MAX_ATTR_VAL);
    const valAttr2 = (Number(cardAttr2) >= 0 && Number(cardAttr2) <= MAX_ATTR_VAL);
    const valAttr3 = (Number(cardAttr3) >= 0 && Number(cardAttr3) <= MAX_ATTR_VAL);
    const valMaxAttrVal = (
      (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= MAX_TOTAL_ATTR_VAL)
    );
    console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));

    const valInputs = (valCardName && valCardDescription && valCardImage && valCardRare);
    const valAttr = (
      valAttr1 && valAttr2 && valAttr3 && valCardDescription && valMaxAttrVal
    );

    this.setState({
      isSaveButtonDisabled: !(
        valInputs && valAttr // se todas const retornarem true, o botão vai ser habilitado( a logica ta invertida pelo ! antes da expressão )
      ),
    });

    // console.log(valCardName, valCardDescription, valCardImage, valCardRare);
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value,
    }, this.errorHandler);
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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
