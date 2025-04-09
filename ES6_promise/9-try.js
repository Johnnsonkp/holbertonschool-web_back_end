// A function named guardrail accepts 1 arg mathFunction (Function).
// This function should create and return an array named queue.
// The mathFunction function is executed, the
// value returned by the function should be appended to the queue.
// If this function throws an error,
// the error message should be appended to the queue.
// In every case, the message Guardrail was processed
// should be added to the queue.
// Example:
// [
//   1000,
//   'Guardrail was processed',
// ]

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  }

  queue.push('Guardrail was processed');

  return queue;
}
