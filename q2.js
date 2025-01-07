function swapValues(x, y) {
    // Swap values using arithmetic operations
  newy = x + 0;
  if (isNaN(newy)) {
    console.log("x must be numeric");
    newy = x;
  }
  newx = y + 0;
  if (isNaN(newx)) {
    console.log("y must be numeric");
    newx = y;
  }
console.log("swapped values of x and y are " + [newx,newy] + " respectively");
}

let r1 = swapValues(5,10);

console.log("\n");

let r2 = swapValues("apple",10);
