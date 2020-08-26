// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GENERATE PASSWORD FUNCTION NEEDS WORK <-----------------------------------------------
//  Need function to verify password criteria from user:

//   var password = "";
//   var characters = (confirmUppercase) ? characters += valuesUppercase : "";
//   (confirmLowercase) ? characters += valuesLowercase : "";
//   (confirmNumbers) ? characters += valuesNumbers : "";
//   (confirmSymbols) ? characters += valuesSymbols : "";

// userpswd = password(pswdLength.value, characters);

// Need loop for selecting random characters based on pswdLength from user
// function generatedPassword(); ??????????


// function password(pswdLength, valuesArray) {

// for (var i = 0; i < l; i++) {
//   var pwd = valuesArray.charAt(Math.floor(Math.random() * valuesArray.length));
// }
// return pwd;

// console.log(password(pswdLength,valuesUppercase));
// }



// // Password Values

var valuesUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var valuesLowercase = "abcdefghijklmnopqrstuvwxyz";
var valuesNumbers = "1234567890";
var valuesSymbols = "!@#$%^&*()_+";


var valuesArray = [valuesUppercase, valuesLowercase, valuesSymbols, valuesSymbols];







// This alert welcomes the user 
alert("Create a unique secure password by responding to the following prompts.");

// Assignment Code for Password Criteria: Character Length
var pswdLength = prompt("How many characters do you want to include in your password? Pick a number between 8-128.")

// Alerts user of their valid or invalid entry from the Number of Characters prompt
if (pswdLength > 7 && pswdLength < 129) {
  alert("Your password will have " + pswdLength + " characters.");
} else {
  alert("Invalid entry.");
  pswdLength;
  
}

// Assignment Code for Password Criteria CONFIRMS
var confirmUppercase = confirm("Do you want to include uppercase letters?");
var confirmLowercase = confirm("Do you want to include lowercase letters?");
var confirmNumbers = confirm("Do you want to include numbers?");
var confirmSymbols = confirm("Do you want to include special characters?");

// Alerts user of their uppercase letter selection
if (confirmUppercase) {
  alert("Your password will include uppercase letters.");
} else {
  alert("Your password will not include uppercase letters.");
}

// Alerts confirm user selection for the inclusion of uppercase letters
if (confirmLowercase) {
  alert("Your password will include lowercase letters.");
} else {
  alert("Your password will not include lowercase letters.");
}

// Alerts confirm user selection for the inclusion of uppercase letters
if (confirmNumbers) {
  alert("Your password will include numbers.");
} else {
  alert("Your password will not include numbers.");
}

// Alerts confirm user selection for the inclusion of uppercase letters
if (confirmSymbols) {
  alert("Your password will include special characters.");
} else {
  alert("Your password will not include special characters.");
}


