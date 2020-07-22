# Implementation: GetEdge
get-edge.js file holds the list constructor
get-edge.test.js holds the tests
    
## Links
- [Open Pull Request](https://github.com/SianCulligan/data-structures-and-algorithms/pull/61)

    
## Challenge
- Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.
    
## Approach & Efficiency
- AddNode() - o(1)
- AddEdge()- o(1)
- GetNodes()- o(n)
- GetNeighbors()- o(n)
- Size()- o(n)
    
## Testing
<!-- Description of how to run your tests -->
Use `npm test get-edge.test.js` to run tests