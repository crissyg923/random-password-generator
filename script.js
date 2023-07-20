// Assignment Code
var generateBtn = document.querySelector("#generate");
//Empty variable and strings to hold characters chosen by user.
var guaranteePassword = [];
var userPasswordChar = "";

//Arrays holding character choices for password.

var lowercaselettersarray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaselettersarray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersarray = [1,2,3,4,5,6,7,8,9,0];
var specialcharactersarray = ['!','@','#','$','%','^','*','?'];

//Function to generate password.

var generatePassword= function(){
//This will send a prompt to user to request a number for password length.
//parseInt along with isNAN ensures that function will halt if non-integer character is inputted by user.
  var passwordLength = parseInt(window.prompt("Password Length.  Please choose a number from 8 to 128.", "enter #"));
  if(isNaN(passwordLength)) {
    alert("Passsowrd must be a number")
    return null;
  }
  //Ensures that password is within parameters of 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passsowrd must be within requirement")
    console.log(typeof passwordLength);
    return null;

  } else {
    // if (passwordLength >7 || passwordLength <129) 
    //These windows will gather the users choices of what characters to include in the random password.
      var lowercaseletters = window.confirm("would you like to include lowercase letters?");
      var uppercareletters = window.confirm("Would you like to include uppercase letters?");
      var numbers = window.confirm("Would you like to include numerical values?");
      var specialcharacters = window.confirm("Would you like yo include special characters?");
    
  }

//If user chooses lowercase letters, the lowercaselettersarray is concatenated with userPasswordChar (the empty string holding 
//the user chosen characters) and joined as a string.  The variable "getRandChar" then uses the math.floor and math.random
//functions to grab a random character.  That random character is then added to the guaranteePassword empty array.  This process
//is repeated for the following 3 if statements as well.
if (lowercaseletters) {
  userPasswordChar += lowercaselettersarray.join("");
  var getRandChar = Math.floor(Math.random() * lowercaselettersarray.length);
  guaranteePassword.push(lowercaselettersarray[getRandChar]);
}

if (uppercareletters){
  userPasswordChar += uppercaselettersarray.join("");
  var getRandChar = Math.floor(Math.random() * uppercaselettersarray.length);
  guaranteePassword.push(uppercaselettersarray[getRandChar]);
} 
if (numbers){
  userPasswordChar += numbersarray.join("");
  var getRandChar = Math.floor(Math.random() * numbersarray.length);
  guaranteePassword.push(numbersarray[getRandChar]);
}
if (specialcharacters) {
  userPasswordChar += specialcharactersarray.join("");
  var getRandChar = Math.floor(Math.random() * specialcharactersarray.length);
  guaranteePassword.push(specialcharactersarray[getRandChar]);
}


//This for loop takes the password characters we obtained so far and iterates through the chosen character arrays 
// grabbing more random characters until we have the password length chosen by the user.

for (let i = guaranteePassword.length; i < passwordLength; i++){ 
  var index = Math.floor(Math.random() * userPasswordChar.length);
  guaranteePassword.push(userPasswordChar[index])
}
//The following lines use the function "shuffleArr" to mix the characters up even more , ensuring that the password is uniquely
//chosen every time. the result.join("") ensures that the password is a string.

var result = shuffleArr(guaranteePassword)
return result.join("");
}

function shuffleArr(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

// This function writes the password to the screen for the user and states that the password is obtained from the 
// generatePassword() function defined above.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// This ensures the password is written after going through our prompts.
generateBtn.addEventListener("click", writePassword);







