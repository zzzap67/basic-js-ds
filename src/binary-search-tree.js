const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(head = null) {
    this.head = head;
  }

  root() {
    return this.head;
  }

  add(data) {

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let lastNode = this.head;
      while (true) {
        if (data < lastNode.data) {
          if (lastNode.left) {
            lastNode = lastNode.left;
          } else {
            lastNode.left = new Node(data);
          }
        } else if (data > lastNode.data) {
          if (lastNode.right) {
            lastNode = lastNode.right;
          } else {
            lastNode.right = new Node(data);
          }
        } else {
          break;
        }

      }

    }

  }

  has(data) {
    if (!this.head) {
      return false;
    } else {
      let lastNode = this.head;
      while (true) {
        if (data < lastNode.data) {
          if (lastNode.left) {
            lastNode = lastNode.left;
          } else {
            return false;
          }
        } else if (data > lastNode.data) {
          if (lastNode.right) {
            lastNode = lastNode.right;
          } else {
            return false;
          }
        } else {
          return true;

        }
      }

    }
  }

  find(data) {
    if (!this.head) {
      return null;
    } else {
      let lastNode = this.head;
      while (true) {
        if (data < lastNode.data) {
          if (lastNode.left) {
            lastNode = lastNode.left;
          } else {
            return null;
          }
        } else if (data > lastNode.data) {
          if (lastNode.right) {
            lastNode = lastNode.right;
          } else {
            return null;
          }
        } else {
          return lastNode;
        }
      }
    }
  }

  remove(data) {
    if (!this.head) {
      //return null;
    } else {
      let lastNode = this.head;
      prev = null;
      while (true) {
        if (data == lastNode.data) {
          if (!prev) {
            break;
          } else if (prev.left == lastNode) {
            prev.left = null;
          } else {
            prev.right = null;
          }
        } else {

          while (true) {
            if (data < lastNode.data) {
              if (lastNode.left) {
                prev = lastNode;
                lastNode = lastNode.left;
              } else {
                //return null;
                break;
              }
            } else {
              if (lastNode.right) {
                prev = lastNode;
                lastNode = lastNode.right;
              } else {
                //return null;
                break;
              }
            }



          }


        }




      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    } else {
      let lastNode = this.head;
      while (true) {
        if (lastNode.left) {
          lastNode = lastNode.left;
        } else {
          return lastNode.data;
        }
      }
    }

  }

  max() {
    if (!this.head) {
      return null;
    } else {
      let lastNode = this.head;
      while (true) {
        if (lastNode.right) {
          lastNode = lastNode.right;
        } else {
          return lastNode.data;
        }
      }
    }

  }
}

module.exports = {
  BinarySearchTree
};