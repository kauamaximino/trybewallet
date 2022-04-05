import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="value-input"
          name="value"
          placeholder="insira seu e-mail"
        />

        <input
          type="text"
          data-testid="description-input"
          name="description"
          placeholder="Descrição"
        />

        <label htmlFor="coins">
          Moeda
          <select id="coins" name="coins">
            {currencies.map((coin) => (
              <option
                value={ coin }
                key={ coin }
              >
                {coin}
              </option>
            ))}
          </select>
        </label>
        <select name="method" data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select name="category" data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Forms);
