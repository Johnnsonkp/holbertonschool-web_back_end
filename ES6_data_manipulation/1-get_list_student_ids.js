// function getListStudentIds that returns an array of ids from a list of objects
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((items) => items.id);
  }
  return [];
}