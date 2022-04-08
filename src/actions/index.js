import RequestCoins from '../services/EconomiaApi';

export const USER_EMAIL = 'USER_EMAIL';
export const WALLET = 'WALLET';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ASK = 'ASK';

export const emailUser = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const currencies = (payload) => ({
  type: WALLET,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const actionRequestCoins = () => async (dispatch) => {
  const response = await RequestCoins();
  const coinsFilter = Object.keys(response).filter((coin) => coin !== 'USDT');
  dispatch(currencies(coinsFilter));
};
