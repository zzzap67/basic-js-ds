const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(head = null) {
    this.head = head;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    if (value) {
      if (lastNode) {
        lastNode.next = new ListNode(value);
      } else {
        this.head = new ListNode(value);
      }
    }




  }

  dequeue() {
    if (this.head) {
      const curr = this.head.value;
      this.head = this.head.next;
      return curr;
    } else {
      return null;
    }
  }
}

module.exports = {
  Queue
};
