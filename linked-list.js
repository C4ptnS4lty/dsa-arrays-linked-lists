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
    item = new Node(val);

    if(!this.head) {
      this.head = item;
      this.tail = item;
      this.length = 1;
    } else {
      this.tail.next = item;
      this.tail = item;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    item = new Node(val);

    if(!this.head) {
      this.head = item;
      this.tail = item;
      this.length = 1;
    } else {
      item.tail = this.head;
      this.head = item;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    
    remove = null;

    if(this.length > 1) {
      currentNode = this.head;

      while (currentNode.next != this.tail) {
        currentNode = currentNode.next;
      }

      remove = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
      this.length -= 1;
    }

    return remove;
  }
  

  /** shift(): return & remove first item. */

  shift() {
    remove = null;

    if(this.length >= 1) {
      remove = this.head;
      this.head = remove.next;
      this.length -= 1;
    }

    return remove;
  }

  /** getnode(idx): helper to retrieve node for getAt and setAt. */
  getNode(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    cur = this.head;
    count = 0;

    while(cur !== null && count != idx) {
      count++;
      cur = cur.next;
    }

    return cur;
  }

 /** getAt(idx): get val at idx. */
  getAt(idx) {
    return this.getNode(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    cur = this.getNode(idx);

    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this.getNode(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.shift(val);
    if (idx === this.length) return this.pop(val);

    let prev = this.getNode(idx - 1);

    let remove = prev.next;
    prev.next = remove.next;

    this.length -= 1;
    return remove.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
