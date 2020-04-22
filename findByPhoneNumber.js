const patients = require("./data");

// console.log(patients);

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

const inputPhoneNumber = process.argv[2];

const patientWeAreLookingFor = patients.find((patient) => {
  //   console.log("number:", patient.phoneNumber);
  //   console.log("correct?", inputPhoneNumber === patient.phoneNumber);
  return inputPhoneNumber === patient.phoneNumber;
});

if (patientWeAreLookingFor === undefined) {
  console.log("404 patient not found");
} else {
  console.log(patientWeAreLookingFor);
}

// predictions:
// - undefined
// - no output
