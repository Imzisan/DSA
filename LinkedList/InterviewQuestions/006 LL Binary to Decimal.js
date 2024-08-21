class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList {
    constructor (value){
        const newNode = new Node(value);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;

    }
    push(value){
        const newNode = new Node (value);

        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        } else {
            this.tail.next =newNode;
            this.tail=this.tail.next;
        }
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    makeEmpty() {
        this.head = null;
        this.tail =null;
        this.length = 0;
    }

    binaryToDecimal(){
        let num =0;
         let temp= this.head;
         while(temp !== null){
            num=num*2+(temp.value);
            temp=temp.next;
         }
         return num;
    }
}

// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log("Convert 1011 to 11:");
console.log("Input: 1 -> 0 -> 1 -> 1");
console.log("Output: ", list1.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log("Convert 1100 to 12:");
console.log("Input: 1 -> 1 -> 0 -> 0");
console.log("Output: ", list2.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log("Convert 1 to 1:");
console.log("Input: 1");
console.log("Output: ", list3.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log("Convert empty list to 0:");
console.log("Input: empty");
console.log("Output: ", list4.binaryToDecimal());
console.log("---------------");

