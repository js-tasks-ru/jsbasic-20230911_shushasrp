function truncate(str, maxlength) {
  const suffix = '…';

  if (str.length > 20) {
    str = str.slice(0, maxlength - suffix.length) + suffix;
  }

  return str;
}
