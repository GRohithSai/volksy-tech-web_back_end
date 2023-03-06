export default function getStudentsByLocation(students, city) {
  // check arg is an array before using filter
  if (object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
