function HashTable(size) {
  this.buckets = Array(size);
  this.size = this.buckets.length;
}

function HashNode(key, value, next, prev) {
  this.key = key;
  this.value = value;
  this.next = next || null;
  this.prev = prev || null;
}

HashTable.prototype.hash = function(key) {
  let hash = "";
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i).toString();
  }
  let convertedHash = Number(hash) % this.size;
  return convertedHash;
};

HashTable.prototype.insert = function(key, value) {
  let hash = this.hash(key);
  if (this.buckets[hash]) {
    let currentNode = this.buckets[hash];
    //   let prevNode = null;
    while (currentNode.next) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      } else {
        //   prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (currentNode.key === key) {
      currentNode.value = value;
    }
    currentNode.next = new HashNode(key, value);
    currentNode.next.prev = currentNode;
  } else {
    this.buckets[hash] = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  let hash = this.hash(key);
  let currentNode = this.buckets[hash];

  while (currentNode) {
    if (currentNode.key === key) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  let hash = this.hash(key);
  let currentNode = this.buckets[hash];

  while (currentNode) {
    if (currentNode.key === key) {
      if (currentNode.prev) {
        let previous = currentNode.prev;
        previous.next = currentNode.next;
        if (currentNode.next) {
          let next = currentNode.next;
          next.prev = currentNode.prev;
        } else {
          previous.next = null;
        }
        return;
      } else {
        if (currentNode.next) {
          currentNode.next.prev = null;
          this.buckets[hash] = currentNode.next;
          currentNode.next = null;
        } else {
          this.buckets[hash] = null;
        }
        return;
      }
    }
    currentNode = currentNode.next;
  }
};

HashTable.prototype.retrieveAll = function() {
  let array = [];
  for (let i = 0; i < this.buckets.length; i++) {
    if (this.buckets[i]) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        array.push(currentNode);
        currentNode = currentNode.next;
      }
    }
  }
  return array;
};

function harmlessRansomNote(noteText, magazineText) {
  let hashTable = new HashTable(30);
  let noteTextSplit = noteText.split(" ");
  let magazineTextSplit = magazineText.split(" ");

  for (let i = 0; i < magazineTextSplit.length; i++) {
    if (hashTable.get(magazineTextSplit[i])) {
      let count = hashTable.get(magazineTextSplit[i]).value;
      hashTable.insert(magazineTextSplit[i], ++count);
    } else {
      hashTable.insert(magazineTextSplit[i], 1);
    }
  }

  for (let i = 0; i < noteTextSplit.length; i++) {
    if (hashTable.get(noteTextSplit[i])) {
      if (hashTable.get(noteTextSplit[i]).value === 0) {
        return false;
      } else {
        let count = hashTable.get(noteTextSplit[i]).value;
        hashTable.insert(noteTextSplit[i], --count);
      }
    } else {
      return false;
    }
  }
  return true;
}

let noteText = "this is a secret note for you from a secret admirer";
let magazineText =
  "puerto rico is a great place you must hike far from town to find a secret waterfall that i am " +
  "an admirer of but note that it is not as hard as it seems this is my advice for you";

console.log(harmlessRansomNote(noteText, magazineText));
