# Linked List Implementation
Linked-list.js file holds the list constructor & extended class
Linked-list.test.js holds the tests
    
## Links
- [Open Pull Request](https://github.com/SianCulligan/data-structures-and-algorithms/pull/36)

    
## Challenge
- Create a linked list that has nodes that are linked together by reference (val, next, prev), starting at the head.
- Extend the LinkedList class to include 3 new prototypes: append, insertBefore, & insertAfter
    
## Approach & Efficiency

- Insert(): o(1)
This function is able to add in nodes without transversing the entire list.
- Includes(): o(n)
- toString():o(n)
Both the includes and toString have to transvers the list, making the big O = O(n).
    
## Testing
Use `npm test linked-list.test.js` to run tests