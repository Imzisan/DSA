// 004 LL Partition List ( Interview Question)
// Instructions
// Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 

// Note: this linked list class does not have a tail which will make this method easier to implement.

// The original relative order of the nodes should be preserved.



// Input:

// An integer x, the partition value.



// Output:

// The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x. 



// Constraints:

// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

// You can only traverse the linked list once.

// You can create temporary nodes to make the implementation simpler.





// Example 1:

// Input:

// Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

// Process:

// Values less than 5: 3, 2, 1

// Values greater than or equal to 5: 8, 5, 10

// Output:

// Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10





// Example 2:
// Input:

// Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

// Process:

// Values less than 3: 1, 2, 2

// Values greater than or equal to 3: 4, 3, 5

// Output:

// Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5





// Tips:

// While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.

// Use dummy nodes to simplify the handling of the heads of these chains.

// After processing the entire list, connect the two chains to get the desired arrangement.



// Note:

// The solution must maintain the relative order of nodes. For instance, in the first example, even though 8 appears before 5 in the original list, the partitioned list must still have 8 before 5 as their relative order remains unchanged.

// Note:

// You must solve the problem WITHOUT MODIFYING THE VALUES in the list's nodes (i.e., only the nodes' next pointers may be changed.)







// Test(s)
// Test 1
// // Validate partitionList on an empty list
// it('confirms no changes on an empty list', () => {
//     const list = new LinkedList(1);
//     list.makeEmpty();
//     list.partitionList(1);
//     expect(list.length).toBe(0);
// });

// // Validate single-element list remains unchanged
// it('confirms single-element list remains unchanged', () => {
//     const list = new LinkedList(1);
//     list.partitionList(1);
//     expect(list.length).toBe(1);
// });

// // Validate all nodes smaller than partition
// it('confirms unchanged list when all values < partition', () => {
//     const list = new LinkedList(1);
//     list.push(2);
//     list.push(3);
//     list.partitionList(4);
//     expect(list.length).toBe(3);
// });

// // Validate all nodes greater than partition
// it('confirms unchanged list when all values > partition', () => {
//     const list = new LinkedList(4);
//     list.push(5);
//     list.push(6);
//     list.partitionList(3);
//     expect(list.length).toBe(3);
// });

// // Validate nodes partitioned correctly
// it('confirms correct partitioning with mixed values', () => {
//     const list = new LinkedList(3);
//     list.push(1);
//     list.push(4);
//     list.push(2);
//     list.partitionList(3);
//     let current = list.head;
//     let passedPartition = false;
//     while (current !== null) {
//         if (current.value >= 3) passedPartition = true;
//         if (passedPartition && current.value < 3) {
//             fail('Nodes not partitioned correctly');
//         }
//         current = current.next;
//     }
//     expect(true).toBe(true);
// });



















class Node {
    constructor(value){
        this.value = value ;
        this.next=null;
    }
}
class LinkedList {
    constructor(value){
        const newNode =new Node (value);
        this.head= newNode;
        this.tail=this.head;
    }
    push(value){
        const newNode =new Node(value);
        
        if(!this.head){
            this.head=newNode;
            this.tail =this.head;
        }
        this.tail.next=newNode;
        this.tail=this.tail.next;
    }
    

    printList(){
        let temp =this.head;
        while(temp != null){
            console.log(temp.value);
            temp =temp.next;
        }
    }
    makeEmpty() {
        this.head = null;
        this.tail =null;
        this.length = 0;
    }


    partitionList(x){
        const dummyNode1 =new Node();
        const dummyNode2= new Node();
        let temp =this.head;
        let leftTail = dummyNode1;
        let rightTail =dummyNode2;
        while (temp != null){
            if (temp.value < x){
                leftTail.next = temp;
                leftTail = temp;

            } else {
                rightTail.next = temp;
                rightTail=temp;
            }
            temp=temp.next;

        }
        rightTail.next = null;
        leftTail.next =dummyNode2.next;
        this.head=dummyNode1.next;
    }
}

// Validate single-element list remains unchanged
var test1 = ()=> {
    const list = new LinkedList(1);
    list.partitionList(1);
    list.printList();
    // expect(list.length).toBe(1);
};

// Validate all nodes smaller than partition
// Validate single-element list remains unchanged
var test2 = () => {
    const list = new LinkedList(1);
    list.push(2);
    list.push(3);
    list.partitionList(4);
    list.printList();
};

// Validate all nodes greater than partition
// Validate single-element list remains unchanged
var test3 =  () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);
    list.partitionList(3);
    list.printList();
};

// Validate nodes partitioned correctly
// Validate single-element list remains unchanged
var test4 =  () => {
    const list = new LinkedList(3);
    list.push(1);
    list.push(4);
    list.push(2);
    list.partitionList(3);
    let current = list.head;
    let passedPartition = false;
    while (current !== null) {
        if (current.value >= 3) passedPartition = true;
        if (passedPartition && current.value < 3) {
            fail('Nodes not partitioned correctly');
        }
        current = current.next;
    }
    list.printList();
};
test1();
test2();
test3();
test4();