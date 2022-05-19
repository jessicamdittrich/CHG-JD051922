var getRandomSymbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var getRandomLower = "abcdefghijklmnopqrstuvwxyz"
var getRandomUpper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var getRandomNumber = "0123456789"
var collectCharacters = ""; //If yes to above it collects all
var passwordCollect = ""; //Randomly collects from collectCharacters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //password now equals passwordCollect
  var passwordText = document.querySelector("#password"); //Where it's going to go
  passwordText.value = password; //Password aka passwordCollect goes into here (.value removes within to replace with passwordCollect)
}

function generatePassword() {
  collectCharacters = "";
  passwordCollect = "";
  var passwordLength = parseInt(window.prompt("How long would you like your password to be?"));
  if (passwordLength >= 8 && passwordLength <= 128) {
  } else {
    alert("Please make sure your password is between 8-128 characters");
    return generatePassword();
  }

    var upper = confirm("Do you want uppercase characters?");
    var lower = confirm("Do you want lowercase characters");
    var special = confirm("Do you want special characters");
    var numbers = confirm("Do you want numbered characters");

      if (upper) {
        collectCharacters += getRandomUpper;
      }
      if (lower) {
        collectCharacters += getRandomLower;
      }
      if (special) {
        collectCharacters += getRandomSymbol;
      }
      if (numbers) {
        collectCharacters += getRandomNumber;
      }
      console.log(collectCharacters);
      for (var i = 0; i < passwordLength; i++){
        var value = Math.floor(Math.random() * collectCharacters.length);
        passwordCollect += collectCharacters[value] //Pulling the new random variables x10 within this loop
        console.log(value);
      }
      return passwordCollect; //Forces password collect

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when I click generate button, function "writePassword" occurs
