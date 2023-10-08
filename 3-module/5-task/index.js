function getMinMax(str) {
  let arr = str.split(' ')
    .filter((item) => isNaN(Number(item)) ? '' : item)
    .map((item) => Number(item))
    .sort( (a, b) => a > b ? 1 : -1);

  let min = arr[0];
  let max = arr[arr.length - 1];

  return {min: min, max: max};
}
