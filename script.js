// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword= function(){

  passwordLength=window.prompt("Password Length.  Please choose a number from 8 to 128.")
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
  if (passwordLength >7 || passwordLength <129) {
    var lowercaseletters= window.prompt("would you like to include lowercase letters?");
    var uppercareletters=window.prompt("Would you like to include uppercase letters?");
    var numbers=window.prompt("Would you like to include numerical values?");
    var specialcharacters=window.prompt("Would you like yo include special characters?");
  }


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
