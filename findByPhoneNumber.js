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

const patientWeAreLookingFor = patients.find((patient) => {
  console.log("number:", patient.phoneNumber);
  console.log("correct?", inputPhoneNumber === patient.phoneNumber);
  if (inputPhoneNumber === patient.phoneNumber) {
    return true;
  } else {
    return false;
  }
});

console.log(patientWeAreLookingFor);

// predictions:
// 1 output, number, correct true
// list of numbers (18): number, correct false / true, the patient we are looking for
