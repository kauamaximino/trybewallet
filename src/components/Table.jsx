import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, delExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>
                {(expense.exchangeRates[expense.currency].name
                  .split('/Real Brasileiro'))}
              </td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {Number(expense.value
                * expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => delExpense(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: propTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
