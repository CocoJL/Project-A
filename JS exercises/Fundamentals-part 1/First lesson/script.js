// let add7 = (number) => number + 7;

// console.log(add7(10));

// let multiply = (number, number1) => number * number1;

// console.log(multiply(12, 12));

// let myWord = prompt("Enter a word. The last letter will be returned.");

// lastLetter(myWord);

// function lastLetter(myWord) {
//   let letter = myWord.slice(-1);
//   console.log(letter);
//   return letter;
// }

let answer = parseInt(prompt("Please enter the number you would like"));

for (i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
