// immutability in flat Array
const students = ['Isabel', 'Santiago']
// first option
// const clonedStudents = [...students]
// second option
const clonedStudents = students.slice()

clonedStudents[0] = 'Andruth'
clonedStudents[1] = 'Sebastian'
console.log(students)
console.log(clonedStudents)

// immutability in array of objects
const studentsObj = [
  {
    name: 'Isabel'
  },
  {
    name: 'Santiago'
  }
]

// It does not work
// const clonedStudentsObj = [...studentsObj]
// first option
const clonedStudentsObj = JSON.parse(JSON.stringify(studentsObj))


clonedStudentsObj[0].name = 'Andruth'
clonedStudentsObj[1].name = 'Sebastian'

console.log(studentsObj)
console.log(clonedStudentsObj)