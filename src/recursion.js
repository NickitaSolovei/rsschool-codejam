module.exports = function recursion(tree) {
  const arr = [];
  arr[0] = [tree.value];

  const arrOfTree = Object.values(tree);

  arrOfTree.forEach((item) => {
    if (typeof item === 'object' && item !== null) {
      const arrRec = recursion(item);
      arrRec.forEach((i, ind) => {
        if (arr[ind + 1] === undefined) {
          arr[ind + 1] = [];
        }
        arr[ind + 1].push(...i);
      });
    }
  });
  return arr;
};
