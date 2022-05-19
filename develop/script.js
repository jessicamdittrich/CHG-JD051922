//The below are the string variables that the user will pull from
var getRandomSymbol = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var getRandomLower = "abcdefghijklmnopqrstuvwxyz"
var getRandomUpper = "ABCDEFGHIJOLMNOPQRSTUVWXYZ"
var getRandomNumber = "0123456789"
//The below is to collect all characters (should user say yes to each individually)
var collectCharacters = "";
//The below will randomly pull contents from passwordCollect
var passwordCollect = "";

//The below is linking the HTML button to the javascript
var generateBtn = document.querySelector("#generate");

//FUNCTION 1 - writePassword will be inputted to #password container in HTML
function writePassword() {
  //The below is saying that password will equal passwordCollect (via generatePassword)
  var password = generatePassword();
  //The below is saying where the passwordText will go in the HTML
  var passwordText = document.querySelector("#password");
  //The below is saying that passwordText equals password via passwordCollect via generatePassword
    //Value means that the passwordTest will replace anything in the contents (which currently there is nothing)
  passwordText.value = password;
}

//FUNCTION 2 - this will ensure password criteria is met and pull from the user's criteria
function generatePassword() {
  //The below resets the characters if another password is generated
  collectCharacters = "";
  passwordCollect = "";
  //SECTION 1 - confirming criteria, length
  //The below is starting the prompt and asking how many characters the user would like their password to contain
  var passwordLength = parseInt(window.prompt("How long would you like your password to be?"));
  //The below is saying the password length must be between 8-128
  if (passwordLength >= 8 && passwordLength <= 128) {
  //The below is saying if the password is less than 8 or more than 128 characters a prompt will appear
    //The prompt will advise that the password needs to be between 8-128 characters (which is standard)
  } else {
    alert("Please make sure your password is between 8-128 characters");
    //The below is restarting the function from the beginning so they can repick their character count
    return generatePassword();
  }

    //SECTION 2 - confirming criteria, characters
    //The below is asking the user if they would like the following characters in their password
    var upper = confirm("Do you want uppercase characters?");
    var lower = confirm("Do you want lowercase characters");
    var special = confirm("Do you want special characters");
    var numbers = confirm("Do you want numbered characters");
      //The below is confirming what characters the user would like to use and adding them into collectCharacters if true
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
      //The below is a loop that is taking user inputted passwordLength and collecting at random from collectCharacters
      for (var i = 0; i < passwordLength; i++){
        var value = Math.floor(Math.random() * collectCharacters.length);
        //The below is taking the end result of the above loop and it is now in passwordCollect
        passwordCollect += collectCharacters[value]
      }
      //The below forces passwordCollect
      return passwordCollect;
}

//The below says that when the user clicks the button (linked to HTML button)
  //then the writePassword function begins and starts the whole process
generateBtn.addEventListener("click", writePassword);
