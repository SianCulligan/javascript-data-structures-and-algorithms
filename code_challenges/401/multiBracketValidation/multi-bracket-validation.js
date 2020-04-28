'use inputict';

function multiBracketValidation(input) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[' ) {
      console.log('in for loop', input[i]);
      stack.push(input[i]);
      console.log('after push', stack);
    } else {
      let closingBracket = stack.pop();
      console.log('in the else', input[i]);
      if (input[i] !== map[closingBracket]) {return false}
      console.log('after pop', stack);
    }
  }
  if (stack.length !== 0) {return false}
  return true;
}



console.log('TEST1', multiBracketValidation('(){}'));
console.log('TEST2', multiBracketValidation('('));

module.exports = multiBracketValidation;
