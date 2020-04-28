# Table of Contents

## Multi Bracket Validation Function

### Challenge
Write a multi bracket validation function that takes a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced.

### Approach & Efficiency
Initially my mind went to Regex, but them I looked into more information about the problem from this [website](https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911), I really liked the approach of creating  map of the acceptable options, traversing thourgh the given string, looking for an opening bracket, then matching it with the closing bracket eliminating any additional characters as it goes.

### Solution
[White-board](./assets/BracketWhiteboard.png)</br></br>
[Code Challenge](multi-bracket-validation.js)

