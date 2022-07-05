'use strict'

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice(this.items)
  },
  count: 0,
  add(name, cost, quan = 1) {
    this.items.push({
      name,
      cost,
      quan
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

    for (let item of items) {
      price += item.cost * item.quan;
      quan += item.quan;
    }
    this.count = quan;
    return price;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)} \n${this.totalPrice}`);
  },
}

cart.add('name', 2, 5);
cart.add('name2', 20, 1);
cart.add('name3', 40, 1);
cart.add('name3', 5, 15);

console.log(cart.totalPrice);
console.log(cart.count);
cart.print();