function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both parameters must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, "2"); // Outputs error and returns 0
let result2 = addSafe(1, 2); // Returns 3