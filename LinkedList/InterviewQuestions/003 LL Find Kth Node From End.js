// 003 LL Find Kth Node From End ( Interview Question)
// Instructions
// Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.

// Note: this LinkedList implementation does not have a length member variable.



// Output:

// Return the kth node from the end of the linked list.

// If the value of k is greater than or equal to the number of nodes in the list, return null.



// Constraints:

// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

// You can only traverse the linked list once.





// Example 1:

// Suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5


// After calling the findKthFromEnd(2) function:

// let kthNode = list.findKthFromEnd(2);
// The kthNode should have the value 4.





// Example 2:

// Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6


// After calling the findKthFromEnd(4) function:

// let kthNode = list.findKthFromEnd(4);
// The kthNode should have the value 3.



// Test(s)
// Test 1
// // Validate findKthFromEnd on an empty list
// it('returns null when list is empty', () => {
//     const list = new LinkedList(1);
//     list.makeEmpty();
//     const result = list.findKthFromEnd(1);
//     expect(result).toBeNull();
// });

// // Validate findKthFromEnd returns head for k = length
// it('returns head when k equals length', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.findKthFromEnd(3);
//     expect(result.value).toBe(1);
// });

// // Validate findKthFromEnd returns tail for k = 1
// it('returns tail when k is one', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.findKthFromEnd(1);
//     expect(result.value).toBe(3);
// });

// // Validate findKthFromEnd returns correct node
// it('returns correct node when k is between 1 and length', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     list.push(4);
//     const result = list.findKthFromEnd(2);
//     expect(result.value).toBe(3);
// });

// // Validate findKthFromEnd with k = 0
// it('returns null when k is zero', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.findKthFromEnd(0);
//     expect(result).toBeNull();
// });

// // Validate findKthFromEnd with negative k
// it('returns null when k is negative', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     const result = list.findKthFromEnd(-1);
//     expect(result).toBeNull();
// });

// // Validate findKthFromEnd doesn't affect head
// it('confirms head remains unchanged', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     list.findKthFromEnd(2);
//     expect(list.head.value).toBe(1);
// });

// // Validate findKthFromEnd doesn't affect tail
// it('confirms tail remains unchanged', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     list.findKthFromEnd(2);
//     expect(list.tail.value).toBe(3);
// });

// // Validate findKthFromEnd on single-element list
// it('returns the node for k = 1 on a single-element list', () => {
//     const list = new LinkedList(1);
//     const result = list.findKthFromEnd(1);
//     expect(result.value).toBe(1);
// });







class Node {
    constructor(value){
        this.value =value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head; 
    }
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head =newNode;
            this.tail =this.head;
        }
        
        this.tail.next = newNode;
        this.tail=this.tail.next;
    }
    makeEmpty(){
        this.head=null;
        this.tail=null;
    }
    findKthFromEnd(k){
        let slow = this.head;
        let fast = slow ;
        for (let i=0 ; i <k ;i++ ){
            if(fast === null){
                return null;
            }
            fast=fast.next;
        }
        while(fast != null){
            slow=slow.next;
            fast=fast.next;
        }
        return slow;
    }

}

function it() {
    const list = new LinkedList(1);
    list.push(2);
    list.push(3);
    const result = list.findKthFromEnd(9) ;
    console.log(result);
};
it();
