function square(num) {
    return num * num;
  }
  
  function cube(num) {
    return num * num * num;
  }
  
  function calculate(operatin, num) {
    return operatin(num);
  }
  
  const number = 5;
  
  const squaredResult = calculate(square, number);
  console.log(squaredResult); //  25
  
  const cubedResult = calculate(cube, number);
  console.log(cubedResult); //  125
  

// const myArray = [1, 2, 3];
// myArray.pop(4);
// console.log(myArray); // Output: [1, 2, 3, 4]

// let anotherArray = [1, 2, 3];
// anotherArray.pop();
// console.log(anotherArray); // Output: [1, 2]
