import React from 'react';
import './Input.css';

class Input extends React.Component {
  render() {
    return (
      <section className="input-section">
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description-input"
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input type="number" name="attr1-input" id="" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input type="number" name="attr2-input" id="" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input type="number" name="attr3-input" id="" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input type="text" name="image-input" id="" data-testid="image-input" />
        </label>
        <label htmlFor="">
          Raridade
          <select name="rare-input" id="" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input type="checkbox" name="trunfo-input" id="" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </section>
    );
  }
}

export default Input;
