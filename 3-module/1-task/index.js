function namify(users) {
  const array = [];
  for (key in users) {
    array.push(users[key].name);
  }
  return array;
}
