// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword= function(){

  passwordLength=window.prompt("Password Length.  Please choose a number from 8 to 128.")
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
  if (passwordLength >7 || passwordLength <129) {
    var lowercaseletters= window.confirm("would you like to include lowercase letters?");
    var uppercareletters=window.confirm("Would you like to include uppercase letters?");
    var numbers=window.confirm("Would you like to include numerical values?");
    var specialcharacters=window.confirm("Would you like yo include special characters?");
  }
var passwordCharacters= [];

if (lowercaseletters) {
  var lowercaselettersarray =['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  passwordCharacters.unshift(lowercaselettersarray);
}

if (uppercareletters){
  var uppercaselettersarray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  passwordCharacters.unshift(uppercaselettersarray);
} 
if (numbers){
  var numbersarray = [1,2,3,4,5,6,7,8,9,0];
  passwordCharacters.unshift(numbersarray);
}
if (specialcharacters) {
  var specialcharactersarray = ['!','@','#','$','%','^','*','?'];
  passwordCharacters.unshift(specialcharactersarray);
}
for (var i=0; i<passwordLength; i++){
  var index = Math.floor(Math.random() * passwordCharacters.length);
  var finalpassword = passwordCharacters[index];
}
return finalpassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
