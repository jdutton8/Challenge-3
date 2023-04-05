// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
  console.log("yay")
} else {
  alert("Select at least one character type")
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
