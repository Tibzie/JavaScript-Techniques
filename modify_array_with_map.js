// SHORTER
function getStudentNames(students) {
  students = [
      { name: "Pista"},
      { name: "Jozsi"},
      { name: "Elemer"},
  ];

  
    return students.map(obj => obj.name);
}

console.log(getStudentNames());


// LONGER
// function getStudentNames(students) {
//     students = [
//     { name: "Pista"},
//     { name: "Jozsi"},
//     { name: "Elemer"},
// ];
//   const reformattedStudents = students.map(obj => {
//     return obj.name;
// });
// }