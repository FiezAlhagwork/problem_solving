/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const newArray = nums.filter((item) => item < target);

  const array = [];
  const sum = 0
//   console.log(newArray);

//   console.log(nums[0].index);

  for (let i = 0; i < newArray.length; i++) {


    for (let j = 1; j < newArray.length ; j++) {
        const sum = newArray[i] + newArray[j]
        
        
        if(sum === target){
            array.push(i)
            array.push(j)
            
        }
    }
  }
    return array.slice(0 , 2)
  
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3,3] , 6)
