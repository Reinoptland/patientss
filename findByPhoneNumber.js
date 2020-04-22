const patients = require("./data");

console.log(patients);

// assumption: phone number is unique
// input phonennumber
// output patient

// data model
// patients: array of objects
// inputPhoneNumber: string

// processing?
// loop?
// array filter? [{}, {}, {}] -> [{}, {}]
// array find? [{}, {}, {}] -> {}

const inputPhoneNumber = "+55-656-460-8983";

const patientWeAreLookingFor = patients.find(() => {
  console.log("hi");
});
