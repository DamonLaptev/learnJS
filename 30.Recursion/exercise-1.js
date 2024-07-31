/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/

const palindrome = (string) => {
  if (string.length === 0) return true;
  if (string.length === 1) return true;
  if (string.length === 2) return string[0] === string[1];
  if (string[0] !== string[string.length - 1]) return false;

  return palindrome(string.substring(1, string.length - 1));
};

console.log(palindrome("levele"));
