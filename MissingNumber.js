var missingNumber = function (nums) {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2; // Sum of numbers 0 to n
  let actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
