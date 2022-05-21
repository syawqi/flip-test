import Env from './../configs/env';

const getTransactionData = async () => {
  try {
    console.log(`${Env.baseApi}frontend-test`);
    const response = await fetch(`${Env.baseApi}frontend-test`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getTransactionData,
};
