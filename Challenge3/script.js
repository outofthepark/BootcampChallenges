//Get references to relevant items
var numericCheckbox = document.querySelector('#numeric');
var lowercaseCheckbox = document.querySelector('#lowercase');
var uppercaseCheckbox = document.querySelector('#uppercase');
var symbolCheckbox = document.querySelector('#symbol');
var generateBtn = document.querySelector("#generate");
var goBtn = document.querySelector('#go');
var passwordLength = document.querySelector('#length');
var passwordChoices = document.querySelector('#password-choices');
var passwordChoices = document.querySelector('#password-choices');

//Generates random password based on parameters
function generatePassword() {
  var password = "";
  
  i=0;
  var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbolAlphabet = "!@#$%^&*()?><";
  var numericAlphabet = "1234567890";
  var all = "";

  if(lowercaseCheckbox.checked){
    i++;
    var letter = lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)]
    password = password + letter;
    all = all + lowercaseAlphabet;
  }
  if(uppercaseCheckbox.checked){
    i++;
    var letter = uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]
    password = password + letter;
    all = all + uppercaseAlphabet;
  }
  if(numericCheckbox.checked){
    i++;
    var letter = numericAlphabet[Math.floor(Math.random() * numericAlphabet.length)]
    password = password + letter;
    all = all + numericAlphabet;
  }
  if(symbolCheckbox.checked){
    i++;
    var letter = symbolAlphabet[Math.floor(Math.random() * symbolAlphabet.length)]
    password = password + letter;
    all = all + symbolAlphabet;
  }

  for (i; i < passwordLength.value; i++) {
    var letter = all[Math.floor(Math.random() * all.length)]
    password = password + letter;
  }

  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listeners
generateBtn.addEventListener("click", function(){
  passwordChoices.style.display='block';
});

passwordChoices.addEventListener("click", function() {
  if( numericCheckbox.checked || uppercaseCheckbox.checked || lowercaseCheckbox.checked || symbolCheckbox.checked ){
    goBtn.style.display='block';
  }else{
    goBtn.style.display='none';
  }
});

goBtn.addEventListener("click", function() {
  writePassword();
});