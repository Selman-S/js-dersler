/*
https://www.codewars.com/kata/529eef7a9194e0cbc1000255
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

// my solution
const sorted = (x) => x.toLowerCase().split("").sort().join("");

var isAnagram = function (test, original) {
  return sorted(test) === sorted(original);
};




/*
https://www.codewars.com/kata/5885b5d2b632089dc30000cc
#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
*/

// my solution
function dayOfTheWeek(date) {
  date = date.split("/").reverse().join("-");
  const newDate = new Date(date);
  const day = newDate.toLocaleString("en-GB", { weekday: "long" });
  return day;
}


// other solution
function dayOfTheWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date(date).getDay();
  return days[day];
}

console.log(dayOfTheWeek("21/01/2017")); // Saturday
console.log(dayOfTheWeek("31/03/2017")); // Friday
