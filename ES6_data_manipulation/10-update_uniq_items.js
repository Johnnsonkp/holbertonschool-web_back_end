// function updateUniqueItems returns an updated map
// for all items with initial quantity at 1.
// accept a map as an argument.

export default function updateUniqueItems(groceries) {
  if (Object.getPrototypeOf(groceries) !== Map.prototype) throw TypeError('Cannot process');

  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });
  return groceries;
}
