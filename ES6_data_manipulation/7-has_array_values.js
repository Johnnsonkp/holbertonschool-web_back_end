// function hasValuesFromArray returns boolean
// if all the elements in the array exist within the set.
// accepts two arguments: a set (Set) and an array (Array).
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
