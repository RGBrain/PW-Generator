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
var lowercaseCharacters = [
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
var uppercaseCharacters = [
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

// Declare variables outside function 
let password = "";
let totalArray = [];

// Function to generate password with user input
function generatePassword() {
    // Create an object for user choices 
    let userOptions = {
      characters: 5,  // initial placeholder value
      special: true,
      numeric: true,
      lowercase: true,
      uppercase: true
    };

    // ? Check password value
    console.log(password);

    do {
      userOptions.characters = prompt("How many characters would you like in your password?")
    } while (userOptions.characters < 10 || userOptions.characters > 64)

    // Function to prompt user for password options
    function getPasswordOptions() {
      userOptions.special = confirm("Include special characters?");
      userOptions.numeric = confirm("Include numeric characters?");
      userOptions.lowercase = confirm("Include lowercase characters?");
      userOptions.uppercase = confirm("Include uppercase characters?");
    }

    // Call password options function and validate that at least one character set has been chosen
    do {
      getPasswordOptions();
    } while (userOptions.special === false && userOptions.numeric === false &&  userOptions.lowercase === false &&  userOptions.uppercase === false)

    // Create custom array 
    totalArray = [];
    if (userOptions.special) {
      totalArray = totalArray.concat(specialCharacters);
    }
    if (userOptions.numeric) {
      totalArray = totalArray.concat(numericCharacters);
    }
    if (userOptions.lowercase) {
      totalArray = totalArray.concat(lowercaseCharacters);
    }
    if (userOptions.uppercase) {
      totalArray = totalArray.concat(uppercaseCharacters);
    }
    console.log(totalArray)  // ! THIS IS WORKING !
    let randomChoice;
    // Function for getting a random element from an array
    function getRandom(arr) {
    return totalArray[randomChoice = Math.floor(Math.random() * totalArray.length)];
    }

      for (i = 0; i < userOptions.characters; i++) {
        password += getRandom(totalArray);
      }
      return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// ? Check password value
console.log(password);

var passwordText = document.querySelector('#password');
passwordText.value = password;
// writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

console.log(password);
