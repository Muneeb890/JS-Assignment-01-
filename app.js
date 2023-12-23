//Question 1: Reverse a string without using the built-in reverse() method.

/*const str = 'Javascript'
function reverseStr(str) {
   for(let i = str.length - 1; i>= 0; i--){
       console.log(str[i])
  }
}
console.log(reverseStr(str))*/

//Question 2: Count the number of vowels in a given string.

/*function countVowels(str) {
    let count = 0;
    for (const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
       ) {
        count++;
       }
    }
    console.log(count);
}*/

//Question 03: Convert the first letter of each word in a sentence to uppercase.
/*
let name = "muneeb";
let Name = name.charAt(0).toUpperCase() + name.slice(1);
console.log(Name);*/

//Question 04: Check if a string is a palindrome.

/*function isPalindrome(text){
    return text == text.split('').reverse().join('');
}
console.log(isPalindrome('mom'));
console.log(isPalindrome('she'));*/

//Question 05: Find the sum of all positive numbers in an array.

/*const array = [1,2,3,4,5];
let sum = 0;
array.forEach(n=> sum += n);
console.log(sum);*/