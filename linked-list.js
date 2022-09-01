/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
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
    // const newNode = new Node(val)
    // this.tail.next = newNode
    // this.tail = newNode
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
    } else{
      newNode.next = this.head
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.length){
      throw new Error("error")
    } else{
      let currentNode = this.head;
      let secondToLastNode = this.head;

      while(currentNode.next){
        secondToLastNode = currentNode;
        currentNode = currentNode.next
      }

      secondToLastNode.next = null
      this.tail=secondToLastNode
      this.length -= 1

      if(!this.length){
        this.head=null
        this.tail=null
      }
      return currentNode.val
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.length){
      throw new Error("error")
    } else{
      let firstNode = this.head;
      let secondNode = firstNode.next
      this.head = secondNode
      this.length -=1

      if(!this.length){
        this.head=null
        this.tail=null
      }
      return firstNode.val
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0 || idx >= this.length){
      throw new Error("error")
    } else{
      let currentNode = this.head
      let count = 0

      while(currentNode.next && count != idx){
        currentNode= currentNode.next
        count += 1
      }
      return currentNode.val
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || idx >= this.length){
      throw new Error("error")
    }else{
      let currentNode = this.head
      let count = 0

      while(currentNode.next && count != idx){
        currentNode= currentNode.next
        count += 1
      }
      currentNode.val = val

    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0 || idx > this.length){
      throw new Error("error")
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

      let newNode = new Node(val)
      let prevNode = this.head
      let count = 0

      while(prevNode !== null && count != idx-1){
        prevNode= prevNode.next
        count += 1
      }
      newNode.next = prevNode.next
      prevNode.next = newNode
      this.length +=1
    }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || idx > this.length){
      throw new Error("error")
    }
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let currentNode = this.head
    let prevNode = this.head
    let count = 0

    while(prevNode !== null && count != idx-1){
      prevNode= prevNode.next
      count += 1
    }
    while(currentNode.next && count != idx){
      currentNode= currentNode.next
      count += 1
    }

    if (idx === this.length - 1) {
      let val = prevNode.next.val;
      prevNode.next = null;
      this.tail = prevNode;
      this.length -= 1;
      return val;
    }

    prevNode.next = currentNode.next
    this.length -= 1
    return currentNode.val
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.length){
      return 0
    }
      let sum = 0;
      let idx = 0;
      let currentNode= this.head
      while(idx <= this.length-1){
        sum += currentNode.val
        idx += 1
        currentNode = currentNode.next
      }
      return (sum/this.length)
  }
}

const train = new LinkedList();
train.push("Lucky")
train.unshift("Kaia")
console.log("unch")
console.log(train)
module.exports = LinkedList;
