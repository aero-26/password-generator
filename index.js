const passwordBox = document.getElementById("password");
const genPassBtn = document.getElementById("genPasswd");
const copyBtn = document.getElementById("copy");

let finalPassword = [];

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()-_=+{}[]:;<>,./?1234567890";

const everyCharacter = characters.split("");

const randomCharacter = function () {
  return Math.floor(Math.random() * everyCharacter.length);
};

function passGen() {
  const passwordLength = document.getElementById("passLen").value;

  for (let i = 0; i < passwordLength; i++) {
    let x = everyCharacter[randomCharacter()];
    finalPassword.push(x);
  }

  let printPass = finalPassword.join("");

  passwordBox.value = printPass;
  finalPassword = [];
}

genPassBtn.addEventListener("click", passGen);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordBox.value);
});
