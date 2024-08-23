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
    console.log(myDLL.remove(4).value);
    console.log("DLL before pop():");
    myDLL.printList();
}
test();
