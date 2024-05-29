const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
  constructor() {
    this.storage = {};
    // this.length = 0
  }
  getUnderlyingList() {
    return this.getNext(this.storage);
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (Object.keys(this.storage).length === 0) {
      this.storage = node;
      // this.length++
    } else {
      let next = this.getNext(this.storage);
      next.next = node;
      // this.length++
    }
    return this.storage;
  }
  getNext(node) {
    while (node.next !== null) {
      node = this.getNext(node.next);
    }
    return node;
  }

  dequeue() {
    let delNode = new ListNode(this.storage.value)

    this.storage.value = this.storage.next.value
    this.storage.next = this.storage.next.next
    // this.length--
    return delNode.value
  }
}

module.exports = {
  Queue,
};
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(37);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.storage.value);
// console.log(queue.getUnderlyingList());
// console.log(queue.dequeue());
// console.log(queue);
