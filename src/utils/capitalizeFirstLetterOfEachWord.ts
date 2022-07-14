export function capitalizeFirstLetterOfEachWord(str: string) {
  return str
    .toLocaleLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}
