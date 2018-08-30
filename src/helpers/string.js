export default function getOnlyDigits(string) {
  if (string) {
    const numberPattern = /\d+/g;
    return string.match(numberPattern).join([]);
  }
  return null;
}
// TODO Add unit test for it
