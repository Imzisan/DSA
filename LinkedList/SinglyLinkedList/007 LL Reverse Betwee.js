class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
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
    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        let temp =this.head;
        if(!temp){
            temp = newNode;
        } else {
            while(temp.next != null){
                temp =temp.next;
            }
            temp.next = newNode;
            this.length ++ ;
        }
        
    }
    reverseBetween(m,n){
        if (this.head === null) return;

        const dummyNode =new  Node(0);
        let prev =dummyNode;
        prev.next = this.head;
        for( let i=0 ;i < m;i++){
            prev =prev.next;
        }
        let current = prev.next;
        for (let i = 0; i < n - m; i++) {
            const temp = current.next; 
            current.next = temp.next;
            temp.next = prev.next; 
            prev.next = temp;
        }

        this.head=dummyNode.next;
    }

        
       
}
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();
