/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // =============== One solution ============== o(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [];

  // ================ Two solution ============ o(n)
  obj = {};
  for (let i = 0; i < nums.length; i++) {
    const match = target - nums[i];  
    if (match in obj) {
      return [obj[match] , i];
    }
    obj[nums[i]] = i;
  }
};

twoSum([2, 15, 11, 7], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
twoSum([6, 7, 89, 9], 12);
