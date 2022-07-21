/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else{
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let result = this.removeAt(this.length - 1);
    return result;
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  retrieveIdx(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      count += 1;
      current = current.next;
    }

    return current;
  }

  getAt(idx) {
    if (idx < 0 || idx > this.length)
      return "Invalid";

    return this.retrieveIdx(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length)
      return "Invalid";
    
    this.retrieveIdx(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0)
      return 0

    let currentVal = this.head;
    let totalVal = 0;

    while(currentVal) {
      totalVal += currentVal.val;
      currentVal = currentVal.next;
    }

    return totalVal / this.length
  }
}

module.exports = LinkedList;
