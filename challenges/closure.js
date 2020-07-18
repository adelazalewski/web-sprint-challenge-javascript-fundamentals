// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//the nested function has closure= it finds the internal variable that it needs, in its lexical environment, the nested funtion and thats where it's lexcical environment is at as well. the internal variable has local scope and the nested function and reach and grab it without any trouble just like my function can reach for the external variable in the global scope as well. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(number){
  let count = 0;
  for(let i = 1; i <= number; i++){
    count += i
  }
  return count;
}

console.log(summation(4));