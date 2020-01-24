function Queue() {
    this.head = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next || null;
}

Queue.prototype.push = function(value) {
    if (this.head === null) {
        this.head = new Node(value);
        return;
    } else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }
}

Queue.prototype.pop = function() {
    if (this.head === null) {
        return null;
    } else {
        let val = this.head.val;
        this.head = this.head.next;
        return val;
    }
}

Queue.prototype.size = function() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
        count++;
        currentNode = currentNode.next;
    }
    return count;
}

Queue.prototype.printAll = function() {
    let currentNode = this.head;
    while(currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

let q = new Queue();
q.push(1);
q.push(2);
q.push("butts");
q.push("ass nugget");
q.push("yeet");

q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.push("NUTS");

q.printAll();