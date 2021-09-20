import { ordersGenerator } from '@/utils/generateOrders.js';
const orders = ordersGenerator(98);

export function loginRequest(login, password) {
  const isLoginSuccess = login === 'admin' && password === '!@12345';
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isLoginSuccess
      ? resolve({ status: 'ok' })
      : reject({ status: 'fail', error: 'Incorrect login or password' })
    }, 500);
  });  
}

export function getOrders(page = 1, itemsPerPage = 10) {
  const startFrom = (page - 1) * itemsPerPage;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        status: 'ok', 
        payload: {
          result: orders.slice(startFrom, startFrom + itemsPerPage),
          total: orders.length,
        }})
    }, 500);
  });  
}

export function getOrderById(id) {
  const order = orders.find(o => parseInt(o.id) === parseInt(id));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      order ? resolve({ status: 'ok', payload: order }) : reject({ status: 'fail', error: `Order with id ${id} not exists` })
  }, 500);
  })
}
