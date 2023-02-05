const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("lengthInput");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecial = document.getElementById("includeSpecial");
const generatedPassword = document.getElementById("generatedPassword");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*";

generateBtn.addEventListener("click", function() {
  let password = "";
  let characterSet = "";

  if (includeLowercase.checked) {
    characterSet += lowercase;
  }
  if (includeUppercase.checked) {
    characterSet += uppercase;
  }
  if (includeNumbers.checked) {
    characterSet += numbers;
  }
  if (includeSpecial.checked) {
    characterSet += special;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  
  generatedPassword.textContent = password;
});
