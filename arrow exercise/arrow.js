// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

  const double = arr => arr.map(
    val => val*2
  );

//   function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){ //returns all the numbers in the array, squared
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){ //returns which of the squared numbers are even
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = numbers => evens(numbers.map( num => num ** 2))
const evens = squares => squares.filter( square => square % 2 === 0);

//I know it could be one line, but I wanted to try it this way.
