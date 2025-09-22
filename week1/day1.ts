// Day 1: TypeScript Basics

// Variables with types
let name: string = "Ayah";
const pi: number = 3.14;

// Operators
let sum: number = 5 + 10;

// Function with typed parameter and return type
function greet(userName: string): string {
  return `Hello ${userName}, the sum is ${sum}`;
}

// Output
console.log(greet(name));
