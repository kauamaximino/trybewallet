import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';
import RequestCoins from '../services/EconomiaApi';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  requestExchange = async () => {
    const { state } = this;
    const { registerExpense, expensesLength } = this.props;
    const exchangeRates = await RequestCoins();
    registerExpense({ id: expensesLength.length, ...state, exchangeRates });
    this.setState({ value: 0 });
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
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

        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.requestExchange }

        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesLength: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  registerExpense: (expense) => dispatch(addExpense(expense)),
});

Forms.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
