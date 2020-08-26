// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This alert welcomes the user 
alert("Create a unique secure password by responding to the following prompts.");


// // Assignment Codes for Password Criteria
var confirmBegin = confirm("Welcome to the Password Generator. Are you ready to begin?");
var numberOfCharacters = prompt("How many characters do you want to include in your password? Pick a number between 8-128.")
var confirmUppercase = confirm("Do you want to include uppercase letters?");
var confirmLowercase = confirm("Do you want to include lowercase letters?");
var confirmNumbers = confirm("Do you want to include numbers?");
var confirmSymbols = confirm("Do you want to include special characters?");

// if (numberOfCharacters > 7 && numberOfCharacters < 129) {
//   alert("Your password will have " + numberOfCharacters + " characters.");
// } else {
//   alert("Invalid entry.");
// }

