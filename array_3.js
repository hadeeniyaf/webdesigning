let nos= [1, 2, 3,4 ,5, 6, 7];
let no =nos.shift(1);
console.log("element shifted: ",no);
console.log("array after shift: ",nos);
nos.unshift(6);
console.log("array after unshift: ",nos);
let arr= [1, 2, 3, 4, 5, 6];
arr.splice(2,2);
console.log("array after splice: ",arr);
arr.splice(1,0,2);
console.log("array after 2nd splice: ",arr);
arr.splice(4,0,10,11,12,13);
console.log("array after filtr: ",arr);
let array= [ 1, 2, 3, 4, 5, 6, 7];
array.splice(3,50);
console.log("after splice: ",array);
array.splice(1,(2,3,4),32,34,35);
console.log("after: ",array);