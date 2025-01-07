const dog = {
    breed: "dog"
}

const cat = { ...dog}; // Modify this line

cat.breed = "cat";

console.log("dog",dog); 

console.log("cat",cat);
