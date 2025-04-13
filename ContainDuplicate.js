let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (var num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicate(nums)); // true
