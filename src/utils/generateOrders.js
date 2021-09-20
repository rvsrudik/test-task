export function ordersGenerator(amount) {
  const orders = new Array(amount);

  for (let i = 0; i < amount; i++) {
    const id = i + 1;
    orders[i] = {
      id,
      name: `Name ${id}`,
      description: `Description ${id}`,
    };
  }

  return orders;
}