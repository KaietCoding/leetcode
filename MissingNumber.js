var missingNumber = function (nums) {
  let set = new Set(nums);
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) return i;
  }
};
