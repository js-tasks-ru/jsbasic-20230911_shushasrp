function checkSpam(value) {
  const spamText = ["1xBet", "XXX"];
  const string = String(value).toLowerCase();

  for (let i = 0; i < spamText.length; i++) {
    if (string.includes(spamText[i].toLowerCase())) {
      return true;
      break;
    }
  }

  return false;
}
