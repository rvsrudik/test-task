import ordersGenerator from '@/utils/generateOrders';

const orders = ordersGenerator(98);

export function loginRequest(login, password) {
  const isLoginSuccess = login === 'admin' && password === '!@12345';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isLoginSuccess) {
        reject(new Error('Incorrect login or password'));
        return;
      }

      resolve({ status: 'ok' });
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
        },
      });
    }, 500);
  });
}

export function getOrderById(id) {
  const order = orders.find((o) => parseInt(o.id, 10) === parseInt(id, 10));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error(`Order with id ${id} not exists`));
        return;
      }

      resolve({ status: 'ok', payload: order });
    }, 500);
  });
}
