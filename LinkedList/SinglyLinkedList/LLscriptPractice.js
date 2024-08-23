class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;
    }
    printList(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp=temp.next;
        }
    }
    getHead(){
        if (this.head === null){
            console.log("Head: null" ) ;
        }else {
            console.log("Head:" + this.head.value);
        }
    }
    getTail(){
        if(this.tail === null){
            console.log("Tail: null");
        }else{
            console.log("Tail:" + this.tail.value);
        }
    }
    getLength(){
        console.log("Length: " + this.length);
    }
    makeEmpty(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(value){
        
        const node =new Node(value);
        if (!this.head){
            this.head=node;
            this.tail=node;
    
        }else {
            this.tail.next=node;
            this.tail=node;
        }
        this.length ++;
        return this;
    }
    pop(){
        if (!this.head){
            return undefined;
        }
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre=temp;
            temp=temp.next;
        }
        this.tail=pre;
        this.tail.next=null;
        this.length --;
        if (this.length === 0 ){
            this.head=null;
            this.tail=null;
        }
        return temp;
        
    }
     unshift(value) {
        const newNode = new  Node (value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
        newNode.next=this.head;
        this.head=newNode;
       
        }
        this.length ++;
        return this;
     }

     shift(){
        if (!this.head){
            return undefined;
        }
        let temp = this.head;
        this.head=this.head.next;
        temp.next=null;
        this.length --;
        if (this.length === 0 ){
            
            this.tail =null;
        }
        return temp;
     }
    get(index){
        if (index < 0 || index >= this.length)
        {
            return undefined;
        }else {
            let temp = this.head;
            for (let i = 0 ; i < index ; i ++){
                temp=temp.next;
            }
            return temp;
        }

    }
    set(index, value){
        let temp = this.get(index);
        if (temp){
            temp.value=value;
            return true;
        }
        return false;
    }
    insert(index, value){
        if ( index === 0 ){
            return this.unshift(value);
        }
        if( index == this.length ){
            return this.push(value);
        }if ( index < 0 || index > this.length){
            return false;
        }
            const newNode =new Node(value);
            let temp = this.get(index-1);
            newNode.next = temp.next;
            temp.next=newNode;
           
            this.length ++;
            return true;

    
        
    }
      remove(index){
        if (index == 0){
            return this.shift();
        }
        if(index == this.length -1){
            return this.pop();
        }
        if (index < 0 || index >= this.length){
            return undefined;
        }
            let temp = this.get(index-1);
            let req = temp.next;
            temp.next=req.next;
            req.next=null;
            this.length --;
            return req;

            
        
        

     }    
      reverse(){
       let temp =this.head; 
       this.head=this.tail;
       this.tail=temp;
       let next=temp.next;
       let prev=null;
       for(let i = 0 ; i < this.length ; i ++ ){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next;
       }
       return this;
      }
}
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

function test() {


console.log("LL before reverse():");
myLinkedList.printList();

myLinkedList.reverse();

console.log("\nLL after reverse():");
myLinkedList.printList();
}


test();
