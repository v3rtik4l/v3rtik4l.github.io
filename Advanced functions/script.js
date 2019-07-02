const first = () => {
  const greet = "hi";
  const second = () => {
    //alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Closures
// a function ran, was executed, it´s never going to execute again
// but it´s going to remember that there are references to those variables
// so the child scope always has access to the parent scope

// Currying
const multiply = (a, b) => a * b; // Call of function -> multiply(4,5) = 20
const curriedMultiply = a => b => a * b; // Call of function -> curriedMultiply (4)(5) = 20
const multiplyBy5 = curriedMultiply(5); // Always multiply by 5 the number sent -> curriedMultiply(4) = 20

// Compose
const compose = (f, g) => a => f(g(a));

const sum = num => num + 1;

//compose(sum,sum)(5)
//Result -> 7
compose(
  sum,
  sum
)(5);

//Avoiding side effects and functional purity. -> determinism
// a function returns always something
//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
