const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.value = null;
  }

  root() {
    return this.value !== null ? this.value : null;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.value === null) {
      this.value = newNode;
    } else {
      this._addNode(this.value, newNode);
    }
  }
  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this.value, data);
  }
  _hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data < node.data) {
      return this._hasNode(node.left, data);
    } else if (data > node.data) {
      return this._hasNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this._findNode(this.value, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this._findNode(node.left, data);
    } else if (data > node.data) {
      return this._findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.value = this._removeNode(this.value, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        const minNode = this._findMinNode(node.right);
        node.data = minNode.data;
        node.right = this._removeNode(node.right, minNode.data);
      }
    }

    return node;
  }
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
  min() {
    return this._findMinNode(this.value).data;
  }

  max() {
    return this._findMaxNode(this.value).data;
  }
  _findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree,
};

