module.exports = function make(...theArgs) {
  if (typeof theArgs[0] === 'function') {
    return null;
  }
  const args = theArgs;

  function f(...theArgsF) {
    if (typeof theArgsF[0] === 'function') {
      const sumArr = args.reduce(theArgsF[0]);
      return sumArr;
    }
    args.push(...theArgsF);
    return f;
  }
  return f;
};
