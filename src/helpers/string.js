export default function getOnlyDigits(string) {
  if (string) {
    const numberPattern = /\d+/g;
    const numbersArray = string.match(numberPattern);
    if (numbersArray === null) {
      return '';
    }
    return numbersArray.join([]);
  }
  return '';
}
