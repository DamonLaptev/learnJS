/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

let num = 0;

while (num < 40) {
  if (num % 2 === 0) {
    console.log(num);
  }

  num++;
}
