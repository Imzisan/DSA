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
   reverse(){
   
    let current = this.head;
    let temp =null;
    while(current != null){
    
      temp=current.prev;  
      current.prev=current.next;
      current.next=temp;
      current=current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
   }
   isPalindrome(){
    let firstNode = this.head;
    let lastNode = this.tail;
    if (this.length <= 1) return true;
    for (i=0 ; i< Math.floor(this.length / 2 ); i ++){
        if(firstNode !== lastNode) return false;
        firstNode = firstNode.next;
        lastNode = lastNode.prev;
    
        return true 
    }
   }
   swapPairs(){
   const dummy = new Node(0);
   dummy.next=this.head;
   let prev = dummy;

    while (this.head !== null && this.head.next !== null){
       const firstNode=this.head;
       const secondNode=firstNode.next;
       prev.next = secondNode;
       firstNode.next=secondNode.next;
       secondNode.next=firstNode;
       firstNode.prev=secondNode;
       secondNode.prev=prev;
       if(firstNode.next !== null ){
        firstNode.next.prev =firstNode;
       }
       this.head=firstNode.next;
       prev=firstNode;
    
    }
    this.head =dummy.next;
    if(this.head) this.head.prev=null;
    
   }
}

// // Test 1: Swap an empty list
// const it= () => {
//     const dll = new DoublyLinkedList();
//     dll.makeEmpty();
//     dll.swapPairs();
//     expect(dll.length).toBe(0);
//     expect(dll.head).toBe(null);
//   };
  
//   // Test 2: Swap a single-element list
//   it('should do nothing for a list with one element', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.swapPairs();
//     expect(dll.head.value).toBe(1);
//   });
  
//   // Test 3: Swap a two-element list
//   it('should swap two elements correctly', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.swapPairs();
//     expect(dll.head.value).toBe(2);
//   });
  
//   // Test 4: Swap a three-element list
//   it('should swap first two nodes in a list with three elements', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.push(3);
//     dll.swapPairs();
//     expect(dll.head.value).toBe(2);
//     expect(dll.head.next.value).toBe(1);
//     expect(dll.head.next.next.value).toBe(3);
//   });
  
//   // Test 5: Swap a four-element list
//   it('should swap all pairs in a list with four elements', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.push(3);
//     dll.push(4);
//     dll.swapPairs();
//     expect(dll.head.value).toBe(2);
//     expect(dll.head.next.value).toBe(1);
//     expect(dll.head.next.next.value).toBe(4);
//     expect(dll.head.next.next.next.value).toBe(3);
//   });
  
//   // Test 6: Check length after swap
//   it('should maintain the same length after swap', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.push(3);
//     dll.swapPairs();
//     expect(dll.length).toBe(3);
//   });
  
//   // Test 7: Check head prev after swap
//   it('should have null head.prev after swap', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.swapPairs();
//     expect(dll.head.prev).toBe(null);
//   });
  
//   // Test 8: Check prev pointers after swap
//   it('should update prev pointers correctly after swap', () => {
//     const dll = new DoublyLinkedList(1);
//     dll.push(2);
//     dll.push(3);
//     dll.push(4);
//     dll.swapPairs();
//     // Skip head and check the prev of the second node
//     expect(dll.head.next.prev.value).toBe(2);
//     expect(dll.head.next.next.prev.value).toBe(1);
//     expect(dll.head.next.next.next.prev.value).toBe(4);
//   });
  
  // Test 9: Swap long list
  const it =() => {
    const dll = new DoublyLinkedList(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    dll.push(6);
    console.log("before..................")
    dll.printList();

    dll.swapPairs();
    console.log("after..................")

    dll.printList();

  };
  
//   // Test 10: Check length after swap on long list
//   it('should maintain the same length after swap on long list', () => {
//     const dll = new DoublyLinkedList(1);
//     for(let i = 2; i <= 10; i++) {
//       dll.push(i);
//     }
//     dll.swapPairs();
//     expect(dll.length).toBe(10);
//   });

it();