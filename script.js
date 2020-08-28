// This Password Generator provides a unique secure password with 8-128 characters based on the criteria selected by the user.

// These variables store password criteria input from the user.
var pswdlength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// These arrays include all possible characters to include in the generated password.

var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Empty array represents possible user selections.
var userOptions = [];

// Empty variable represents random password generated.
var tempPassword = "";


// This function generates the password by compiling selections made by user via prompts and confirms

function generatePassword() {

    // Asks user to select a password length from 8-128 characters.
    pswdlength = parseInt(prompt("How many characters do you want to include in your password? Pick a number between 8-128."));

    // Alerts/Prompts the user if they do not enter a value OR if they enter a value outside of the range.
    if (!pswdlength) {
        alert("Please enter a value.");
    } else if (pswdlength < 8 || pswdlength > 128) {
        // pswdlength = parseInt(prompt("You must choose between 8 and 128"));
        pswdlength = prompt("Please choose a password length between 8-128 characters");
    };

    // Asks user which criteria they want to include: numbers, special characters or upper/lowercase letters.
    confirmNumber = confirm("Will this contain numbers?");
    confirmSymbol = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowercase = confirm("Will this contain lowercase letters?");


    // Validates all user selected criteria.
    if (pswdlength > 7 || pswdlength < 129) {
        alert("Your password will include " + pswdlength + " characters.");
    }
    if (confirmNumber) {
        alert("Your password will include numbers.");
        userOptions = userOptions.concat(number);
    }
    if (confirmSymbol) {
        alert("Your password will include special characters.");
        userOptions = userOptions.concat(symbol);
    }
    if (confirmUppercase) {
        alert("Your password will include uppercase letters.");
        userOptions = userOptions.concat(upper);
    }
    if (confirmLowercase) {
        alert("Your password will include lowercase letters.");
        userOptions = userOptions.concat(lower);
    }

    // console.log(userOptions);

    // Alerts user if there is a false return for all 4 criteria confirmations.
    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        alert("After selecting your password length. You must choose from the additional criteria. Please refresh and try again");

    }

    // For loop to generates random password characters based on user selected password length
    for (var i = 0; i < pswdlength; i++) {

        var randomNumber = Math.floor(Math.random() * Math.floor(userOptions.length - 1));
        tempPassword += userOptions[randomNumber];

        // console.log(randomNumber);
        // console.log(userOptions[randomNumber]);
    }
    return tempPassword;
}

var generateBtn = document.querySelector("#generate");

//  Starts password generation process when user clicks on the generate button
generateBtn.addEventListener("click", writePassword);

// Writes password to the #password input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
