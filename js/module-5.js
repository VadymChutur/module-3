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

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// cart.remove('apple');

// console.table(cart.getItems());

// cart.clear();

// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// cart.increaseQuantity('lemon');
// cart.increaseQuantity('lemon');
// cart.increaseQuantity('strawberry');
// cart.increaseQuantity('banana');

// console.table(cart.getItems());

// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('strawberry');
// cart.decreaseQuantity('strawberry');

// console.table(cart.getItems());

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

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let colectionName = [];

//   for (let item of products) {
//     console.log(item[propName]);
//     if (item[propName]) {
//       colectionName.push(item[propName]);
//     }
//   }

//   return colectionName;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const createTask = { ...{ category, priority }, ...data, ...{ completed } };

//   return createTask;
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const { books } = this;

//     for (let i = 0; i < books.length; i += 1) {
//       if (books[i] === bookName) {
//         this.books.splice(i, 1);
//       }
//     }

//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     const { books } = this;

//     console.log(this.books.splice(books.indexOf(oldName), 1, newName));
//     console.log(books);
//     // for (let i = 0; i < books.length; i += 1) {
//     //   if (books[i] === oldName) {
//     //     this.books.splice(i, 1, newName);
//     //   }
//     // }

//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// // console.log(bookShelf.removeBook('The guardian of dreams'));
// console.log(
//   bookShelf.updateBook('The guardian of dreams', 'The guardian of dreams 2')
// );

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;

//     for (let potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = this.potions[i];
//       if (name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     console.log(potions);

//     for (const potion of potions) {
//       console.log(potion.name);
//       if (potion.name === oldName) {
//         console.log((potion.name = newName));
//       }
//     }
//   },
//   // Change code above this line
// };

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;

    for (const { name } of potions) {
      if (newPotion.name === name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
    return this.potions;
  },
  removePotion(potionName) {
    const { potions } = this;
    // const potionIndex = this.potions.indexOf(potionName);
    // console.log(potionName);

    for (let i = 0; i < potions.length; i += 1) {
      // console.log(i);
      // console.log(potions[i].name);

      if (potionName === potions[i].name) {
        console.log(potions[i]);
        this.potions.splice(i, 1);
        return `Potion ${potionName} is not in inventory!`;
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      if (oldName === potions[i].name) {
        potions[i].name = newName;
      }
    }

    console.log(potions);
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));

// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.getPotions());

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
