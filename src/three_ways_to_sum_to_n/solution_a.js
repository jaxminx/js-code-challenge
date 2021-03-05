// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function (n) {
  var results = 0;
  for (var i = 0; i <= n; i++) {
    results += i;
  }
  return results;
};
