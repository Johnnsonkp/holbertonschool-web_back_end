// function getStudentsByLocation returns an arr of objs
// who are located in a specific city
// It should accept a list of students (from getListStudents)
// and a city (string) as parameters.
export default function getStudentsByLocation(students, city) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
