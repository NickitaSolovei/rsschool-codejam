module.exports = function sumOfOther(arr) {
  const sumArr = arr.reduce((sum, current) => sum + current);
  const res = arr.map(item => sumArr - item);
  return res;
};
