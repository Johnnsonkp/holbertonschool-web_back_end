// A function named divideFunction will accept 2 arg:
// numerator (Number) & denominator (Number).
// When the denominator arg is equal to 0,
// the function should throw a new error with the message
// "cannot divide by 0".
// Otherwise return the numerator divided by the denominator.

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}
