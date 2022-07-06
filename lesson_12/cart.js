'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice(this.items);
  },
  count: 0,
  add(name, cost, quan = 1) {
    this.items.push({
      name,
      cost,
      quan,
    });
    this.increaseCount(quan);
    // this.calculateItemPrice(this.items);
  },
  increaseCount(inrement) {
    this.count += inrement;
  },
  calculateItemPrice(items) {
    let price = 0;
    let quan = 0;

    for (const item of items) {
      price += item.cost * item.quan;
      quan += item.quan;
    }
    this.count = quan;
    return price - price * this.discount / 100;
  },
  discount: 0,
  set setDiscount(promocode) {
    if (isNaN(promocode) && promocode.toUpperCase() === 'METHED') {
      this.discount = 15;
    }
    if (isNaN(promocode) && promocode.toUpperCase() === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)} \n${this.totalPrice}`);
  },
};

cart.add('name', 2, 5);
cart.add('name2', 20, 1);
cart.add('name3', 40, 1);
cart.add('name3', 5, 15);

cart.setDiscount = 123;

console.log(cart.totalPrice);
console.log(cart.discount);
console.log(cart.count);
cart.print();
