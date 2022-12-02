// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Create über-array 
const totalArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

// TODO Create an object for user choices 
let userOptions = {
  characters: 10,
  special: true,
  numeric: true,
  lowercase: true,
  uppercase: true
};

// Function to prompt user for password options
function getPasswordOptions() {
  userOptions.characters = prompt("How many characters would you like in your password?")
  userOptions.special = confirm("Include special characters?")
  userOptions.numeric = confirm("Include numeric characters?")
  userOptions.lowercase = confirm("Include lowercase characters?")
  userOptions.uppercase = confirm("Include uppercase characters?")
}

let randomChoice;
// Function for getting a random element from an array
function getRandom(arr) {
 return totalArray[randomChoice = Math.floor(Math.random() * totalArray.length)];
}

// Create custom array in line with user choices 
userOptions = {
  characters: 10,
  special: true,
  numeric: true,
  lowercase: true,
  uppercase: true
};

// ? For Debugging
getRandom();
getPasswordOptions();
console.log(userOptions)
console.log(randomChoice)
console.log(getRandom);

let password;
// Function to generate password with user input
function generatePassword() {
  for (i=0; i < userOptions.characters.length(); i++) {
    password += getRandom
  }
}
generatePassword();
console.log(password);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);