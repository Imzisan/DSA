// 002 LL Has Loop ( Interview Question)
// Instructions
// Write a method called hasLoop that is part of the linked list class.

// The method should be able to detect if there is a cycle or loop present in the linked list.

// The method should utilize Floyd's cycle-finding algorithm, also known as the "tortoise and hare" algorithm, to determine the presence of a loop efficiently.

// The method should follow these guidelines:



// Create two pointers, slow and fast, both initially pointing to the head of the linked list.

// Traverse the list with the slow pointer moving one step at a time, while the fast pointer moves two steps at a time.

// If there is a loop in the list, the fast pointer will eventually meet the slow pointer. If this occurs, the method should return true.

// If the fast pointer reaches the end of the list or encounters a null value, it means there is no loop in the list. In this case, the method should return false.



// Output:

// Return true if the linked list has a loop.

// Return false if the linked list does not have a loop.



// Constraints:

// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

// You can only traverse the linked list once.

// Test(s)
// Test 1
// // Validate hasLoop returns false on an empty list
// it('returns false for an empty list', () => {
//     const list = new LinkedList(1);
//     list.makeEmpty();
//     const result = list.hasLoop();
//     expect(result).toBe(false);
// });

// // Validate hasLoop returns false on a single-element list
// it('returns false for a single-element list', () => {
//     const list = new LinkedList(1);
//     const result = list.hasLoop();
//     expect(result).toBe(false);
// });

// // Validate hasLoop returns false on a list with no loop
// it('returns false for a list with no loop', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.hasLoop();
//     expect(result).toBe(false);
// });


// // Helper function to create a partial loop
// function createPartialLoop(linkedList) {
// linkedList.head.next.next.next.next = linkedList.head.next;
// }

// it("returns true for a list with a loop", () => {

// // Create linked list with 8 elements
// const longList = new LinkedList(1);
// for (let i = 2; i <= 8; i++) {
//   longList.push(i);
// }

// // Create a loop in the first half
// createPartialLoop(longList);

// // Create a second half list with no loop
// const secondHalf = new LinkedList(5);
// secondHalf.push(6);
// secondHalf.push(7);
// secondHalf.push(8);

// // Check if hasLoop() returns true for list with a loop
// expect(longList.hasLoop()).toBe(true);

// // Check if hasLoop() returns false for list without a loop
// expect(secondHalf.hasLoop()).toBe(false);

// });




class Node{
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
        while( temp !== null){
            console.log(temp.value);
            temp=temp.next;
        }
    }
    push(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next=newNode;
            this.tail = this.tail.next;
        }
        this.length ++ ;
        return this;
    }
    makeEmpty(){
        this.head=null;
        this.tail=null;
    }

    hasLoop(){
        // using floyd here tortoise algo 
        let slow = this.head;
        let fast = slow;
        while( fast !== null && fast.next !== null) {
            slow=slow.next;
            fast=fast.next.next;
            if(fast === slow ){
                return true
            }
        }
        return false;
        
    }
}