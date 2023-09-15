// Aufgabe 1 -> String umkehren

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseString("Javascript"));

// Aufgabe 2 -> Schaltjahr?

function leapYear(year) {
  let isLeapYear = false;
  if (year % 4 === 0) {
    isLeapYear = true;
    if (year % 100 === 0 && year % 400 !== 0) {
      isLeapYear = false;
    }
  }
  return isLeapYear;
}

console.log(leapYear(2000));

// Aufgabe 3 -> Pangram?

function isPangram(string) {
  let text = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (text.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(
  isPangram("Franz jagt im komplett verwahrlosten Taxi quer durch Bayern")
);
