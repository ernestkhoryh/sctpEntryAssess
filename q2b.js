let patientName = [];

function addPatient(name){
    if (typeof name === "string" && name.trim().length > 0) {
        patientName.push(name.trim());
        console.log(`Patient '${name}' added successfully.`);
    } else {
        console.log("Invalid input: Please provide a valid name.");
    }
}

function listPatient() {
    if (patientName.length === 0) {
        console.log("No patients are currently stored.");
    } else {
        console.log("List of patients:");
        patientName.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
        });
    }
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient();
