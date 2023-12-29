// var restoreString = function(s, indices) {
    
// };


// let s = "codeleet"
// let  indices = [4,5,6,7,0,2,1,3]
let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
let indicess = Array.from({ length: indices.length }, (_, i) =>{ return i});
for (let i=0 ; i< indices.length ; i++){
  indicess[indices[i]]= s[i]
}
console.log(indicess);

// Create an array to store the rearranged characters
// let resultArray = [];

// // Iterate through the indices and rearrange the characters
// for (let i = 0; i < indices.length; i++) {
//     resultArray[indices[i]] = s[i];
// console.log(resultArray[indices[i]]);
//     console.log(s[i]);
//     console.log(indices[i]);
// }
// console.log(resultArray);
// // Join the array to form the final string
// let result = resultArray.join('');

// console.log(result);