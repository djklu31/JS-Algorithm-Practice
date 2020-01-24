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

let HT = new HashTable(30);

HT.insert("SHIT", "BALLS");
HT.insert("GANG", "Sandwish");
HT.insert("shit", "Eat");
HT.insert("YO", "shorts");
HT.insert("SHIEAT", "nuts");
HT.insert("LUV", "hallejulhg");
HT.insert("LUFF", "moose");
HT.insert("SH4IT", "incred");
HT.insert("G5ANG", "indirect");
HT.insert("s2hit", "TIMMY");
HT.insert("Y555O", "Tim");
HT.insert("SHIaaEAT", "Shiv");
HT.insert("LU333V", "Shud");
HT.insert("LU222FF", "Prevail");
HT.insert("SHI4EAT", "Marilyn");
HT.insert("L33UV", "wassss");
HT.insert("LUF3F", "you");
HT.insert("SH24IT", "mojang");
HT.insert("G53ANG", "hunnie");
HT.insert("s25hit", "east");
HT.insert("Y55665O", "west");
HT.insert("SHIaa3dEAT", "yahh");
HT.insert("LU33as3V", "woo");
HT.insert("LU2s22FF", "yee");
HT.insert("SH4IT", "LOVEME3");

//   console.log(HT, null, 2);
//   console.log(HT.get("LU33as3V"));
//   HT.remove("LU33as3V");
//   console.log(HT.get("LU33as3V"));
//   console.log(JSON.stringify(HT, null, 2));

console.log(HT.retrieveAll());
