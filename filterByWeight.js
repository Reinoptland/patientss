const patients = require("./data");
// console.log(patients);
const weight = parseInt(process.argv[2]);

const output = patients.filter((patient) => {
  console.log("weight", patient.weight);
  return patient.weight <= weight;
});

console.log(output);

// syntax error (red underline)
// do we have the data, the patients
// weight -> not correct datatype
// made syntax while writing my functions
// I did not check what a patient object looks like, what data it has
// no check on my logic

// seperate topic semis or no semis

// input
// weight: number
// patients: array of objects

// output: patients (array of objects)
// but only people who weight less then the input weight

// processing?
// array.filter -> [{}, {}, {}, {}] -> [{}, {}]
