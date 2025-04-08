// function cleanSet returns a string of all
// the set values that start with a specific string (startString).
// It accepts two arguments: a set (Set) and a startString (String).
// When a value starts with startString you only append
// the rest of the string.
// The string contains all the values of the set separated by -.

export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const strings = [];
    for (const item of set) {
      if (item.startsWith(startString)) {
        strings.push(item.slice(startString.length));
      }
    }
    return strings.join('-');
  }
  return '';
}
