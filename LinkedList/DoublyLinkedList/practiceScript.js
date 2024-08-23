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
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
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
}
function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);
    myDLL.push(3);
    myDLL.push(4);
    myDLL.push(5);

    console.log("DLL before pop():");
    myDLL.printList();

    console.log("\poped node:");
    console.log(myDLL.pop(2).value);
}
test();
