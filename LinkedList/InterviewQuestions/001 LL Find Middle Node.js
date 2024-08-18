// 001 LL Find Middle Node ( Interview Question)
// Instructions
// Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

// Note: this LinkedList implementation does not have a length member variable.



// Output:

// Return the middle node of the linked list.

// If the list has an even number of nodes, return the second middle node (the one closer to the end).



// Constraints:

// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

// You can only traverse the linked list once.





// Example 1:

// Suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5


// After calling the findMiddleNode() function:

// let middle = list.findMiddleNode();
// The middle node should have the value 3.





// Example 2:

// Now suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6


// After calling the findMiddleNode() function:

// let middle = list.findMiddleNode();
// The middle node should have the value 4.

// Test(s)
// Test 1
// // Test if findMiddleNode returns null on an empty list
// it('returns null for an empty list', () => {
//     const list = new LinkedList(1);
//     list.makeEmpty();
//     const result = list.findMiddleNode();
//     expect(result).toBe(null);
// });

// // Test if findMiddleNode returns the only node for a single-element list
// it('returns node for a single-element list', () => {
//     const list = new LinkedList(1);
//     const result = list.findMiddleNode();
//     expect(result.value).toBe(1);
// });

// // Test if findMiddleNode returns the middle node in an odd-length list
// it('returns middle node for odd-length list', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.findMiddleNode();
//     expect(result.value).toBe(2);
// });

// // Test if findMiddleNode returns the second middle node in an even-length list
// it('returns second middle node for even-length list', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     list.push(4);
//     const result = list.findMiddleNode();
//     expect(result.value).toBe(3);
// });

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
    }
    printList(){
      
            let temp=this.head;
            while(temp !== null){
                console.log(temp.value);
                temp=temp.next;
            }
        
    }
    makeEmpty(){
        this.head=null;
        this.tail=null;
        this.length=o;
    }
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        this.tail.next=newNode;
        this.tail=this.tail.next;
    }
    findMiddleNode(){
       let slow = this.head;
       let fast = slow;
       while(fast !==null && fast.next !==null){
        slow = slow.next;
        fast=fast.next.next;

       }
       return slow;

    }

}
function test(){
    const list = new LinkedList(1);
    // list.makeEmpty();
    // const result1 = list.findMiddleNode();
    // console.log(result1);

    // list.push(1);
    // const result2 = list.findMiddleNode();
    // console.log(result2);



    // list.push(2);
    // list.push(3);
    // const result = list.findMiddleNode();

    list.push(2);
    list.push(3);
    list.push(4);
    const result = list.findMiddleNode();
     console.log(result.value);


}
test();
