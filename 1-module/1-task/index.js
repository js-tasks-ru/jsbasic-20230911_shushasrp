function factorial(numb) {
  if (numb === 0 || numb === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= numb; i++) {
    result *= i;
  }

  return result;
}
