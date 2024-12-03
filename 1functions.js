// FUNCTIONS

// function logger() {
//     console.log("logger  jogger");
// }

// logger();  //calling the function

// FUNCTIONS WITH DYNAMIC PARAMETERS

// function studentDetails(name, place, standard) {
//     let statusOfStudent = `Name of the person is ${name} have been travelling from ${place} and is studying in ${standard}th standard`;
//     return statusOfStudent;
// }
// let details = studentDetails("niha", "wgl", 5);
// console.log(details);

// FUNCTION DECLARATION

// --> Calculating age of a person
function age1(birthYear) {
  return 2024 - birthYear;
}
const ageofPerson = age1(1999);
console.log(ageofPerson);

// FUNCTION EXPRESSION

const calculatedAge = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calculatedAge(1998);
console.log(ageofPerson, age2);
