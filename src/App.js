import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    // attr1: '',
    // attr2:'',
    // attr3:'',
    // image:'',
    // rarity:'',
    // isTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, description } = this.state;
    console.log(this);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          onInputChange={ this.onInputChange }
        />
        <Card />
      </div>
    );
  }
}

export default App;
