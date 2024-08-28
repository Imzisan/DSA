// Instructions
// Implement a member function called swapFirstLast() that swaps the values of the first and last nodes of a doubly linked list.



// Output:

// The function should modify the doubly linked list in-place, swapping the values of the first and last nodes.





// Example 1:

// Suppose you have a DoublyLinkedList object, list, with the following values:
// 1 <-> 2 <-> 3 <-> 4 <-> 5

// After calling the swapFirstLast() function:

// list.swapFirstLast();
// The doubly linked list should now have the following values:
// 5 <-> 2 <-> 3 <-> 4 <-> 1





// Example 2:

// Now suppose you have a DoublyLinkedList object, list, with the following values:
// 3 <-> 1 <-> 2

// After calling the swapFirstLast() function:

// list.swapFirstLast();
// The doubly linked list should now have the following values:
// 2 <-> 1 <-> 3







// Test(s)
// Test 1
// // Test 1: Swap first and last in an empty list
// it('should handle an empty list', () => {
//   const dll = new DoublyLinkedList();
//   dll.makeEmpty();
//   dll.swapFirstLast();
//   expect(dll.head).toBe(null);
//   expect(dll.tail).toBe(null);
// });

// // Test 2: List with a single element
// it('should handle a single-element list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 3: List with two elements
// it('should swap correctly with two elements', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(2);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 4: List with three elements
// it('should swap first and last with three elements', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(3);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 5: List with even length
// it('should swap first and last in an even-length list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3).push(4);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(4);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 6: List with odd length
// it('should swap first and last in an odd-length list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3).push(4).push(5);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(5);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 7: List with duplicate values
// it('should swap first and last with duplicate values', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(1).push(2);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(2);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 8: List with all identical values
// it('should handle list with all identical values', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(1).push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 9: List with negative values
// it('should swap negative values', () => {
//   const dll = new DoublyLinkedList(-1);
//   dll.push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(-1);
// });

// // Test 10: List with null values
// it('should swap null values', () => {
//   const dll = new DoublyLinkedList(null);
//   dll.push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(null);
// });

class Node {
    constructor(value){
    this.value=value;
    this.next=null;
    this.prev=null;    
    }
    
}
class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head=newNode;
        this.tail=this.head;
        this.length =1;
    }
    push(value){
        const newNode =new Node(value);
        if (!this.head){
            this.head=newNode;
            this.tail=this.head;
        } else {
            this.tail.next =newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length ++;
    }
    printList(){
        let temp =this.head;
        let output = "";
        if (!temp){
            return console.log("empty");
        }else{
            while(temp !== null){
                output += String(temp.value);
                temp = temp.next;
                if(temp != null){
                    output += "->";
                }
            }
            console.log(output);
            
        }

    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop(){
        if (!this.head){
            return undefined;
        } 
        let temp =this.tail;
        if (this.length== 1) {
            this.head=null;
            this.tail=null;
        }else {
            
            this.tail = temp.prev;
            this.tail.next =null;
            temp.prev=null;
           
        }
        this.length --;
        return temp;

    }
    unshift(value){
        const newNode = new Node(value);
        if (!this.head){
            this.head= newNode;
            this.tail=this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head=newNode;

        }
        this.length ++;
        return this;
    }
    shift(){
        if(!this.head){
            return undefined ;
        }
        let temp =this.head;
        if (this.length===1){
            this.head =null;
            this.tail =null;
        } else {
            
            this.head =this.head.next;
            this.head.prev=null;
            temp.next =null;

        }
        this.length -- ;
        return temp;
    }
    get(index){
        if (!this.head){
            return undefined;
        }
        let temp = this.head;
        if(index < 0 || index >= this.length){
            return undefined;
        } else if (index < this.length/2){
            for ( let i = 0 ; i < index ; i ++){
                temp =temp.next;
            }
            return temp;
        } else {
            temp = this.tail;
            for ( let i=this.length -1 ; i > index ; i --){
                temp =temp.prev;
            }
            return temp;
        }

    }
    set(index,value){
        let temp = this.get(index);
        while (temp){
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index , value){
        if (index < 0 || index > this.length) return false  ;
        if (index === 0 ) {
            return this.unshift(value);
        }
        if (index == this.length){
            return this.push(value);
        }
        const newNode = new Node (value);
        let before = this.get(index -1);
        let after = before.next;
        newNode.next = before.next;
        after.prev=newNode;
        before.next=newNode;
        newNode.prev=before;
        this.length ++;
        return true;

    }
    remove(index){
        if (index < 0 || index >= this.length) return false ;
        if ( index == this.length -1) return  this.pop();
        if (index === 0 ) return this.shift();
        const temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev =temp.prev;
        temp.next =null ;
        temp.prev = null;
        this.length --;
        return temp;
    }
    swapFirstLast(){
        if (this.length < 2) return;
        const temp =this.head.value;
        this.head.value=this.tail.value;
        this.tail.value = temp;
    }
}