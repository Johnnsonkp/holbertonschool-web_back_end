// func updateStudentGradeByCity returns an arr of students
// for a specific city with their new grade
// Accept a list of students (from getListStudents),
// a city (String), and newGrades (Array of “grade” objects)
// as parameters.
// newGrades is an array of objects with this format:
// {
//   studentId: 31,
//   grade: 78,
// }
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Object.getPrototypeOf(students) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
