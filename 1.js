// Dada una matriz de números enteros nums y un número entero target, devuelva los índices de los dos números de modo que sumentarget .

// Puede suponer que cada entrada tendría exactamente una solución y no puede usar el mismo elemento dos veces.

// Puede devolver la respuesta en cualquier orden.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

let nums = [3,3];
let taget = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
                console.log(result);
                return result;
            }
        }
    }
};

twoSum(nums, taget);