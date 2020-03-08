// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var inputArray = [
  { subject: 'Maths', marks: '40', noOfStudents: '5' },
  { subject: 'Science', marks: '50', noOfStudents: '16' },
  { subject: 'History', marks: '35', noOfStudents: '23' },
  { subject: 'Science', marks: '65', noOfStudents: '2' },
  { subject: 'Maths', marks: '30', noOfStudents: '12' },
  { subject: 'History', marks: '55', noOfStudents: '20' },
], outputArray = [];
  
inputArray.forEach(function(e) {
  if(!this[e.subject]) {
    this[e.subject] = { subject: e.subject, marks:  0, noOfStudents: 0 }
     outputArray.push(this[e.subject]);
   }
  this[e.subject].marks += Number(e.marks);
  this[e.subject].noOfStudents += Number(e.noOfStudents);
}, {});

console.log(outputArray)