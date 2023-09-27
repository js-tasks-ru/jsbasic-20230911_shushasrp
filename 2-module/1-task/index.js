function sumSalary(salaries) {
  let result = 0;

  for (let key in salaries) {
    if (salaries[key] > 0 && isFinite(salaries[key])) {
      result += isBoolean(salaries[key]);
    }
  }

  return result;
}

// Это не входило в ТЗ. Но имеет место быть. Поэтому отдельной функцией
function isBoolean(value) {
  return typeof value === 'boolean' ? 0 : value;
}
