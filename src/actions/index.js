import RequestCoins from '../services/EconomiaApi';

export const USER_EMAIL = 'USER_EMAIL';

export const emailUser = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const WALLET = 'WALLET';

export const wallet = (payload) => ({
  type: 'WALLET',
  payload,
});

export const actionRequestCoins = () => async (dispatch) => {
  const response = await RequestCoins();
  const coinsFilter = Object.keys(response).filter((coin) => coin !== 'USDT');
  dispatch(wallet(coinsFilter));
};
