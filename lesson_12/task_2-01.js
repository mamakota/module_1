'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set setWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },
  set setHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },
  get perimeter() {
    return `${2 * (this.height + this.width)} см`;
  },
  get square() {
    return `${this.height * this.width} см`;
  },
};

rectangle.setWidth = 10;
rectangle.setHeight = 15;
console.log(rectangle.perimeter);
console.log(rectangle.square);
console.log(rectangle);
