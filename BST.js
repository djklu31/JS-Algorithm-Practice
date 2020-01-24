function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  let newBST = new BST(value);

  if (value < this.value) {
    if (this.left === null) {
      this.left = newBST;
      // return;
    } else {
      let currentNode = this.left;
      currentNode.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = newBST;
      // return;
    } else {
      let currentNode = this.right;
      currentNode.insert(value);
    }
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else {
    if (value < this.value) {
      if (this.left == null) {
        return false;
      } else {
        let currentNode = this.left;
        console.log("goLeft");
        return currentNode.contains(value);
      }
    } else {
      if (this.right == null) {
        return false;
      } else {
        let currentNode = this.right;
        console.log("goRight");
        return currentNode.contains(value);
      }
    }
  }
};

BST.prototype.inOrderTraversal = function() {
  if (this.left) {
    this.left.inOrderTraversal();
  }

  console.log(this.value);

  if (this.right) {
    this.right.inOrderTraversal();
  }
};

BST.prototype.preOrderTraversal = function() {
  console.log(this.value);

  if (this.left) {
    this.left.inOrderTraversal();
  }

  if (this.right) {
    this.right.inOrderTraversal();
  }
};

BST.prototype.postOrderTraversal = function() {
  if (this.left) {
    this.left.inOrderTraversal();
  }

  if (this.right) {
    this.right.inOrderTraversal();
  }

  console.log(this.value);
};

BST.prototype.breadthFirstSearch = function() {
  let queue = [];
  queue.push(this);

  console.log("YO");

  while (queue.length) {
    let currentNode = queue.shift();

    console.log(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) {
    this.left.getMinVal();
  } else {
    console.log(this.value);
  }
};

BST.prototype.getMaxVal = function() {
  if (this.right) {
    this.right.getMaxVal();
  } else {
    console.log(this.value);
  }
};

let bst = new BST(50);

bst.insert(10);
bst.insert(600);
bst.insert(60);
bst.insert(15);
bst.insert(20);
bst.insert(120);
bst.insert(200);
bst.insert(110);
// console.log(bst)
// console.log(bst.contains(600));

// bst.inOrderTraversal();
// bst.preOrderTraversal();
// bst.postOrderTraversal();
bst.breadthFirstSearch();
bst.getMaxVal();
