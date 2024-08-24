// Instructions
// Implement a member function called swapFirstLast() that swaps the values of the first and last nodes of a doubly linked list.



// Output:

// The function should modify the doubly linked list in-place, swapping the values of the first and last nodes.





// Example 1:

// Suppose you have a DoublyLinkedList object, list, with the following values:
// 1 <-> 2 <-> 3 <-> 4 <-> 5

// After calling the swapFirstLast() function:

// list.swapFirstLast();
// The doubly linked list should now have the following values:
// 5 <-> 2 <-> 3 <-> 4 <-> 1





// Example 2:

// Now suppose you have a DoublyLinkedList object, list, with the following values:
// 3 <-> 1 <-> 2

// After calling the swapFirstLast() function:

// list.swapFirstLast();
// The doubly linked list should now have the following values:
// 2 <-> 1 <-> 3







// Test(s)
// Test 1
// // Test 1: Swap first and last in an empty list
// it('should handle an empty list', () => {
//   const dll = new DoublyLinkedList();
//   dll.makeEmpty();
//   dll.swapFirstLast();
//   expect(dll.head).toBe(null);
//   expect(dll.tail).toBe(null);
// });

// // Test 2: List with a single element
// it('should handle a single-element list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 3: List with two elements
// it('should swap correctly with two elements', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(2);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 4: List with three elements
// it('should swap first and last with three elements', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(3);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 5: List with even length
// it('should swap first and last in an even-length list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3).push(4);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(4);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 6: List with odd length
// it('should swap first and last in an odd-length list', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(2).push(3).push(4).push(5);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(5);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 7: List with duplicate values
// it('should swap first and last with duplicate values', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(1).push(2);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(2);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 8: List with all identical values
// it('should handle list with all identical values', () => {
//   const dll = new DoublyLinkedList(1);
//   dll.push(1).push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(1);
// });

// // Test 9: List with negative values
// it('should swap negative values', () => {
//   const dll = new DoublyLinkedList(-1);
//   dll.push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(-1);
// });

// // Test 10: List with null values
// it('should swap null values', () => {
//   const dll = new DoublyLinkedList(null);
//   dll.push(1);
//   dll.swapFirstLast();
//   expect(dll.head.value).toBe(1);
//   expect(dll.tail.value).toBe(null);
// });