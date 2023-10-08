function camelize(str) {
  let result = [];
  let savedItem = '';

  result = str.split('').map((item) => {
    if (savedItem === '-') {
      savedItem = item;
      return item.toUpperCase();
    }
    savedItem = item;

    return item === '-' ? null : item;
  });

  return result.join('');
}
