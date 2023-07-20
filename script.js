// Assignment Code
var generateBtn = document.querySelector("#generate");

//Empty string and array variables for gathering user-chosen characters.
var guaranteePassword = [];
var userPasswordChar = "";

//Arrays holding possible characters

var lowercaselettersarray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaselettersarray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersarray = [1,2,3,4,5,6,7,8,9,0];
var specialcharactersarray = ['!','@','#','$','%','^','*','?'];

var generatePassword= function(){

  var passwordLength = parseInt(window.prompt("Password Length.  Please choose a number from 8 to 128.", "enter #"));
  if(isNaN(passwordLength)) {
    alert("Passsowrd must be a number")
    return null;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passsowrd must be withing requirement")
    console.log(typeof passwordLength);
    return null;
  } else {
    // if (passwordLength >7 || passwordLength <129) {
      var lowercaseletters = window.confirm("would you like to include lowercase letters?");
      var uppercareletters = window.confirm("Would you like to include uppercase letters?");
      var numbers = window.confirm("Would you like to include numerical values?");
      var specialcharacters = window.confirm("Would you like yo include special characters?");
    // }
  }

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
console.log("before loop");
console.log(passwordCharacters);
console.log(completedpassword);

for (let i = guaranteePassword.length; i < passwordLength; i++){ 
  var index = Math.floor(Math.random() * userPasswordChar.length);
  // completedpassword = userPasswordChar[index];
  guaranteePassword.push(userPasswordChar[index])
}
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// var arr = ["D", "A", "B", "C"]

// function getRand(x) {
//   var randomizer = Math.floor(Math.random() * x.length);
//   var x = arr[randomizer]
//   console.log("INDEX: ", randomizer)
//   console.log("CHAR: ", x)
// }


// getRand(arr)
