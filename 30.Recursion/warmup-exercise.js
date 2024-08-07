/*
    1. Create a function called "fizzbuzz" that takes two
       number arguments: "startNum" and "endNum"
    2. The function will count from "startNum" to the "endNum"
       incrementing by 1 each time and do the following:
    3. If the number is:
       - Divisible by 3: Print "Fizz" followed by the number
       - Divisible by 5: Print "Buzz" followed by the number
       - Divisible by both 3 AND 5:
         - Print "FizzBuzz" followed by the number (no fizz or buzz)
       - In all other cases, just print the number itself
        
    3. You must solve this using recursion
    4. Test it with different start and end values

    HINT: What is the base-case vs the "regular" cases here?
*/

const fizzbuzz = (startNum, endNum) => {
  let curNum = startNum;
  if (curNum === endNum) {
    return curNum;
  }

  if (curNum % 3 === 0 && curNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (curNum % 3 === 0) {
    console.log("Fizz");
  } else if (curNum % 5 === 0) {
    console.log("Buzz");
  } else console.log(curNum);

  fizzbuzz(startNum + 1, endNum);
};

fizzbuzz(0, 10);
