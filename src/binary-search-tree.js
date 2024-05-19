const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root(){

    return this.root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    if (!data) return undefined;
    return this.find(data) === data ? true : false;
  }

  find(data) {
    let node = this.root;
    if (node === null) return null;
    while (node !== null) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else if (data === node.data) {
        return node.data;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let node = this.root;
    if (node.left === null) return node;
    else return this.min();
  }

  max() {
    let node = this.root;
    if (node.right === null) return node;
    else return this.max();
  }
}

module.exports = {
  BinarySearchTree,
};
const BST = new BinarySearchTree();
BST.add(11);
BST.add(7);
BST.add(2);
BST.add(15);
BST.add(9);

BST.add(6);

console.log(BST.root());

