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

  var generatedPassword = "";
  var length = prompt("How many characters in your password?");
 var isValidNumber = Number(length) >= 8 && Number(length) <= 128;
 if (!isValidNumber){
  alert("Length must be between 8 and 128 characters");
  return generatedPassword;
 }

 var useUppercase = confirm("Do you want uppercase letters?");
 
 var useLowercase = confirm("Do you want lowercase letters?");

 var useNumber = confirm("Do you want numbers?");

var useSpecialChar = confirm("Do you want special characters?");
 


var criteriaOptions = [uppers, lowers, numbers, symbols];
var criteriaFilters = [useUppercase, useLowercase, useNumber, useSpecialChar];

if (useUppercase || useLowercase || useNumber || useSpecialChar) {
  var passwordCriteria = [];
  for (i=0; i < criteriaFilters.length; i++) {
    if (criteriaFilters[i]) {
      passwordCriteria.push(criteriaOptions[i]);
    }
  }
  for (i = 0; i < length; i++ ) {
    var selectedCriteria = passwordCriteria[getRandomInt(passwordCriteria.length-1)];
    var charNumber = getRandomInt(selectedCriteria.length-1);
  
    generatedPassword += selectedCriteria[charNumber];
  }
  
} else {
  alert("Select at least one character type")
}
return generatedPassword;
}

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random()*max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
