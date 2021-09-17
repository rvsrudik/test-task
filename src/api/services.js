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


const orders = [
  {
    id: 1,
    name: 'Order 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Order 2',
    description: 'Description 2',
  },
  {
    id: 3,
    name: 'Order 3',
    description: 'Description 3',
  },
  {
    id: 4,
    name: 'Order 4',
    description: 'Description 4',
  },
  {
    id: 5,
    name: 'Order 5',
    description: 'Description 5',
  },
]

export function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'ok', payload: orders })
    }, 500);
  });  
}

export function getOrderById(id) {
  console.log('id', id);
  const order = orders.find(o => parseInt(o.id) === parseInt(id));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      order ? resolve({ status: 'ok', payload: order }) : reject({ status: 'fail', error: `Order with id ${id} not exists` })
  }, 500);
  })
}
