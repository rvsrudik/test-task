export default function ordersGenerator(amount) {
  const orders = new Array(amount);

  for (let i = 0; i < amount; i += 1) {
    const id = i + 1;
    orders[i] = {
      id,
      name: `Name ${id}`,
      description: `Description ${id}`,
    };
  }

  return orders;
}
