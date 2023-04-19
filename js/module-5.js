const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());
