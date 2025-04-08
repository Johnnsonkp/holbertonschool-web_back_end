// function getStudentIdsSum returns the sum of all the student ids.
// Accepts a list of students (from getListStudents) as a parameter.
// Must use the reduce function on the array.
export default function getStudentIdsSum(students) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    const ids = students.map((items) => items.id);
    const reducer = (accumlator, currentValue) => accumlator + currentValue;
    return ids.reduce(reducer);
  }
  return [];
}
