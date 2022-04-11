// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, ADD_EXPENSE, DELETE_EXPENSE, INITIAL_VALUE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const calculateTotal = (arrayExpenses) => {
  if (arrayExpenses.length === 0) return 0;
  const expenses = arrayExpenses.map((expense) => expense.value
    * expense.exchangeRates[expense.currency].ask);

  return expenses.reduce((acc, curr) => acc + curr, 0).toFixed(2);
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, currencies: action.payload };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      total: calculateTotal([...state.expenses, action.payload]),
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.payload),
      total: calculateTotal(state.expenses
        .filter((expense) => expense.id !== action.payload)),
    };

  case INITIAL_VALUE:
    return {
      ...state,
      total: calculateTotal(state.expenses),
    };

  default: return state;
  }
};

export default walletReducer;
