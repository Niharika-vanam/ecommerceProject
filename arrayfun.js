//[1,2,3,4,5,6], 2, 5

//output: [3, 4, 5]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function subArray(a, b, c) {
  return a.slice(b, c);
}
let finalArray = subArray(numbers, 2, 5);
console.log(finalArray);
