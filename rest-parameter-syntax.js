/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a+ b + c;
let sum = sumAll(1, 1 , 3);
console.log(sum)

// Extra arguments are ignored
let sum2 = sumAll(1, 2 , 3, 4, 5, 6);
console.log(sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }
    return sum
}

let sum3 = sumRest(1,2,3,4,5,6);

console.log(sum3)

// Challenge:
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr, ...letters) => {
   let sortedReverse = [...arr, ...letters].sort().reverse();
   return sortedReverse;
};
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);
