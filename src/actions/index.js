// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';

export const emailUser = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const wallet = (payload) => ({
  type: 'WALLET',
  payload,
});
