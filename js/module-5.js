const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log('Such a product already existsd');
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    // for (const item of this.items) {
    //   console.log(item);
    //   if (productName === item.name) {
    //     console.log(`Match ${productName}`);
    //   }
    // }

    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        // console.log(`Match ${productName}`);
        // console.log(i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    // console.log(items);
    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    // console.log(this.items);
    const { items } = this;
    // console.log(items);

    for (const item of items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }

    console.log('There is no such product in the shopping cart');
  },
  decreaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName && item.quantity > 1) {
        item.quantity -= 1;
        return;
      }
    }

    console.log(
      'Minimum number of products 1, to remove use the method cart.remove([Product name])'
    );
  },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

cart.remove('apple');

console.table(cart.getItems());

cart.clear();

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

console.log(cart.countTotalPrice());

cart.increaseQuantity('apple');
cart.increaseQuantity('apple');
cart.increaseQuantity('apple');
cart.increaseQuantity('lemon');
cart.increaseQuantity('lemon');
cart.increaseQuantity('strawberry');
cart.increaseQuantity('banana');

console.table(cart.getItems());

cart.decreaseQuantity('apple');
cart.decreaseQuantity('lemon');
cart.decreaseQuantity('strawberry');
cart.decreaseQuantity('strawberry');

console.table(cart.getItems());

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let colectionName = [];

  for (let item of products) {
    console.log(item[propName]);
    if (item[propName]) {
      colectionName.push(item[propName]);
    }
  }

  return colectionName;
  // Change code above this line
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));
