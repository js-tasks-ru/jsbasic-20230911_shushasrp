function showSalary(users, age) {
  let result = '';

  users.forEach((item, index) => {
    if (item.age <= age) {
      if (result.length > 0) {
        result += '\n';
      }
      result += `${item.name}, ${item.balance}`;
    }
  });

  return result;
}
