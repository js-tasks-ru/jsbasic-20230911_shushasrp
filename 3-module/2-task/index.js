function filterRange(arr, a, b) {
  let result = [];

  for (let item of arr) {
    console.log(item < a || item > b);
    if (item >= a && item <= b) {
      result.push(item);
    }
  }

  return result;
}
