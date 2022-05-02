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
      return null;
    } else {
      let lastNode = this.head;
      let firstNode = this.head;
      let prev = null;
      let prevtype = 0;

      while (true) {
        console.log(lastNode.data);
        if (data == lastNode.data) {
          console.log("find");
          if (!lastNode.left && !lastNode.right) {
            console.log("no childs");
            if (prevtype == -1) {
              prev.left = null;
              return firstNode;
            } else {
              prev.right = null;
              return firstNode;
            }
          } else if (!lastNode.right) {
            console.log("no right");
            if (prevtype == -1) {
              prev.left = lastNode.left;
            } else {
              prev.right = lastNode.left;
            }
            return firstNode;
          } else {
            // находим минимум среди правых
            console.log("looking min from right");

            let findNode = lastNode.right;
            let prevFindNode = null;

            while (true) {
              console.log(findNode);
              console.log(findNode.data);

              if (!findNode.left) {
                console.log("found min", findNode.data);
                if (!prev) {
                  console.log("no prev delete head");
                  console.log(prevFindNode);
                  console.log(findNode);
                  console.log(firstNode.left);
                  if (!prevFindNode) {
                    findNode.left = firstNode.left;
                    this.head = findNode;
                    console.log(firstNode);

                    return findNode;
                  } else if (!findNode.right) {
                    console.log("no right");
                    prevFindNode.left = null;
                    firstNode.value = findNode.value;
                    return firstNode;
                  } else {
                    console.log("right is");
                    firstNode.data = findNode.data;
                    prevFindNode.left = findNode.right;
                    return firstNode;
                  }
                } else if (!prevFindNode) {
                  if (prevtype == -1) {
                    prev.left = lastNode.right;
                  } else {
                    prev.right = lastNode.right;
                  }
                  return firstNode;
                } else if (!findNode.right) {
                  console.log("no right");
                  prevFindNode.left = null;
                  prev.value = findNode.value;
                  return firstNode;
                } else {
                  console.log("right is");
                  lastNode.data = findNode.data;
                  prevFindNode.left = findNode.right;
                  return firstNode;
                }
              } else {
                prevFindNode = findNode;
                findNode = findNode.left;
              }
            }
          }
        } else if (data < lastNode.data) {
          if (!lastNode.left) {
            return lastNode;
          } else {
            prevtype = -1;
            prev = lastNode;
            lastNode = lastNode.left;
          }
        } else {
          if (!lastNode.right) {
            return lastNode;
          } else {
            prevtype = 1;
            prev = lastNode;
            lastNode = lastNode.right;
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