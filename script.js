// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write global variables for the password
var pwdNumber = "1234567890"
var pwdLowerCase = "abcdefghijklmnopqrstuvwxyz"
var pwdUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pwdSpChar = "!@#$%^&*()_=+[]{}/?<>"
var pwdinput = [""]
var pwdRandom = ""



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

    // ask for number of characters (8-128)
var characterAmount = window.prompt("Choose number of characters 8-128");
console.log(characterAmount);
// password length doesn't meets requirements:
if (characterAmount < 8 || characterAmount > 128 || isNaN(characterAmount)) {
alert("Entry invalid, input character amount 8-128");
return
} 

// ask if they want uppercase, using confirm or cancel
var upperCase = confirm("Include upper case?");
console.log(upperCase);
// enter what will happen when they confirm
if (upperCase === true) {
    for (var i = 0; i < pwdUpperCase.length; i++) {
        pwdinput.push(pwdUpperCase[i]);
   }
    console.log(pwdinput);
}
// ask if they want lowercase, using confirm or cancel
var lowerCase = confirm("Include lower case?");
console.log(lowerCase);
//what happens when confirmed
if (lowerCase === true) {
    for (var i = 0; i < pwdLowerCase.length; i++) {
        pwdinput.push(pwdLowerCase[i]);
    }
    console.log(pwdinput);
}

// ask if they want numbers
var includeNumbers = confirm("Include numbers?");
console.log(includeNumbers);
//what happens after confirmed
if (includeNumbers === true) {
    for (var i = 0; i < pwdNumber.length; i++) {
        pwdinput.push(pwdNumber[i]);
    }
    console.log(pwdinput);
}
// ask if they want special characters
var specialCharacters = confirm("Include special characters?");
console.log(specialCharacters);
//action after confirmed
if (specialCharacters === true) {
    for (var i = 0; i < pwdSpChar.length; i++) {
        pwdinput.push(pwdSpChar[i]);
    }
    console.log(pwdinput);
}
function showPrompts() {
    characterAmount = prompt
    upperCase = confirm("Include upper case?");
    lowerCase = confirm("Include lower case?");
    specialCharacters = confirm("Include special characters?");
    includeNumbers = confirm("Include numbers?");
}

// for each character in the password
    // randomly select a chosen character type
var pwdRandom = ""

    // randomly select a character from that type
//to create how long the pwd is into an intiger
const pwdLength =parseInt(characterAmount)
// return the randomized password
for (var i = 0; i < pwdLength; i++) {
    pwdinput[
        Math.floor(Math.random() * pwdinput.length)
    ];
    pwdRandom += pwdinput[
        Math.floor(Math.random() * pwdinput.length)
    ];
}
//randomized password should show in box
return pwdRandom;
}

