/*
  types: 
  string
  number : 200, -1.5, 0.1444
  boolean
  Date : new Date
  Todo : {title: 'new post', isCompleted: true, id : 5}

  -----------------------------
  Types in TS:

  1-Primitive Types:
    -number
    -string
    -boolean
    -undefined
    -symbol
    -null
    -void

  2-Object Types
    -functions
    -arrays
    -classes
    -objects
    ------------

    Type Annotations:
    We tell typescript the type

    Type Inference :
    TypeScript tries to figure out the type
*/

// Annotations:
const apple: number = 5;

let colors: string[] = ['res', 'blue'];
let myNumbers: number[] = [1, 54, 44];
let truths: boolean[] = [false, true];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 21,
};

// Function
let logNumber: (i: number) => void = (f: number) => {
  console.log(f);
};

// Type Inference: if declaration and initialization are on the same line,
// TypeScript will figure out the type for us.

// example:

let myColor = 'red';
let myNum = 5;

/* 
  When to use annotations:
  1) Functions that returns the 'any' type
*/

const json = '{"x": 24, "y": 45}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2)delayed initialization

let words = ['red', 'blue', 'green'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, 12, 2];

let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Type Annotations + Type Inference on Functions

// 1) Type annotations: the code we add to tell the type of arguments of functions and what type it will return

// 2) Type Inference: ts tries to figure out what type of value a function will return.

const add = (a: number, b: number) => {
  return a + b;
};

// always add return type
const subtract = (a: number, b: number): number => {
  // a -b;
  return a - b;
};
