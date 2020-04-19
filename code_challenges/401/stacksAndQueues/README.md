# Stacks and Queues
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge --> 
- Create a Node, Stack, & Queue class. 
- Add methods on both the stack and queue class
- All code must pass tests

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- The efficiency of these methods is o(1) since they do not have to traverse a list and will always take tha same amount of time regardless of how many nodes

## API
<!-- Description of each method publicly available to your Stack and Queue-->
Universal Methods
- isEmpty: Checks to see if the stack or queue is empty
- Peek: Checks the stack for the top node & the queue for the front node

Queue Specific
- Dequeue: Removes a node from the front
- Enqueue: Adds a node to the back

Stack Specific
- Pop: Removes a node from the top of the stack
- Push: Adds a node to the top of the stack