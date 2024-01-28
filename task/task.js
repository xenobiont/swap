const arr = ['first', 'second', 'third', 'fourth', 'fifth'];
// Your code here

[arr[3], arr[4]] = [arr[4], arr[3]];

console.log(arr);

const [el1, , el3] = arr;
console.log(el1);
console.log(el3);
