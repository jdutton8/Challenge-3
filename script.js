// Assignment Code
//This grabs the generate password button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// The pool of characters that the password generator will pull from.
var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',];

function generatePassword() {
  var useUppercase;
  var useLowercase;
  var useNumber;
  var useSpecialChar;

  var length = prompt("How many characters in your password?");
 var isValidNumber = Number(length) >= 8 && Number(length) <= 128;
 if (!isValidNumber){
  alert("Length must be between 8 and 128 characters");
  return;
 }

 if (confirm("Use uppercase?")) {
  useUppercase = true;
 } else {
  useUppercase = false;
 }
 if (confirm("Use lowercase?")) {
  useLowercase = true;
 } else {
  useLowercase = false;
 }
 if (confirm("Use number?")) {
  useNumber = true;
 } else {
  useNumber = false;
 }
 if (confirm("Use special character?")) {
  useSpecialChar = true;
 } else {
  useSpecialChar = false;
 }

if (useUppercase || useLowercase || useNumber || useSpecialChar) {
  
} else {
  alert("Select at least one character type")
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
