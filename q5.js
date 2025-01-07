const person = {
  firstName: "Jane",
  lastName: "Smith",
  hobby: "swimming"
};

const introduce = ({ firstName, hobby }) => {
  return `Hello, my name is ${firstName} and I love ${hobby}`;
};

const message = introduce(person);

document.querySelector("#test").innerHTML = message;
