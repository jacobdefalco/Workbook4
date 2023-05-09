"use strict";
let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] }, // an array of test scores for each individual student
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];
//array representing all the students and their scores

for (let i = 0; i < students.length; i++) {
  //initializing the for loop to go through the array
  let student = students[i]; //grabbing each individual object under the array
  let averageScore = 0;
  for (let i = 0; i < student.scores.length; i++) {
    //initializing the for loop to go through the objects
    averageScore += student.scores[i]; //grabbing each set of students' scores within each object and adding it to `averageScore`
  }
  averageScore /= student.scores.length; //taking the sum of all the scores for a given student and dividing it by the number of scores
  console.log(`${student.name} - Average Score: ${averageScore.toFixed(2)}`);
}
