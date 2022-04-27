const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = [];
  push(/* element */) {
    this.arr.push(arguments[0]);
    return this;
  }

  pop() {
    if (this.arr.length > 0) {
      const item = this.arr.pop()
      return item;
    } else {
      return undefined;
    }
  }

  peek() {
    if (this.arr.length > 0) {
      return this.arr[this.arr.length-1];
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Stack
};
