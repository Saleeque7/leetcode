// var findDisappearedNumbers = function(nums) {
//     let ele =[]
    
//     for(let i=1;i< nums.length ; i++){
//        if(!nums.includes(i)){
//         ele.push(i)
//        }
//     }
//     return ele
// };
var findDisappearedNumbers = function(nums) {   
    let n = nums.length;
     let ans = new Set(nums);
     let array = [];
     for (let i = 1; i <= n; i++) {
         if (!ans.has(i)) {
            array.push(i);
         }
     }
     return array;
 }

let nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums));