// Assignment Code
var generateBtn = document.querySelector("#generate");



//variables
const lowCase = 'abcdefghijklmnopqrstuvwxyz'
const upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numCase = '0123456789'
const specCase = `!@#$%^&*()_+-=`



//generating password
const generatePassword = () => {

  //prompts with variable assignments
  let passlength = parseInt(prompt("Please choose number of characters for password length between 8 and 128..."))
  if (passlength < 8 || passlength > 128) {
    alert('Password length must be between 8 and 128 characters')
    generatePassword()
  }
  let boolLowCase = confirm("Use lowercase?")
  let boolUpCase = confirm("Use uppercase?")
  let boolNumCase = confirm("Use numbers?")
  let boolspecCase = confirm("Use special characters?")
  if (!boolLowCase && !boolUpCase && !boolNumCase && !boolspecCase) {
    alert('Please try again. You must select at least one character option')
    generatePassword()
  }

  let tempPass = ''
  let genPass = ''



  if (boolLowCase) { tempPass += lowCase }
  console.log(tempPass)
  if (boolUpCase) { tempPass += upCase }
  console.log(tempPass)
  if (boolNumCase) { tempPass += numCase }
  console.log(tempPass)
  if (boolspecCase) { tempPass += specCase }
  console.log(tempPass)

  for (let i = 0; i < passlength; i++) {
    genPass += tempPass[Math.floor(Math.random() * tempPass.length)]
  }
  return genPass
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
