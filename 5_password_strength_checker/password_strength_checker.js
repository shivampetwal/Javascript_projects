function checkPasswordStrength() {
  var password = document.getElementById("password").value;
  var strength = document.getElementById("strength");

  var specialCharCount = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
  var upperCaseCount = (password.match(/[A-Z]/g) || []).length;

  // Password length determines strength (this is a simple example)

  var lengthStrength;
  if (password.length <= 6 && specialCharCount === 0 && upperCaseCount === 0) {
    lengthStrength =
      "[Weak] : Very very very easy to break 👎😭👎 , increase the length of your password";
  } 
  else if (password.length > 6 && password.length <= 8 && specialCharCount < 2 && upperCaseCount < 2) {
    lengthStrength =
      "[Weak] : very  easy to break  👎😣👎 , add more special and uppercase characters";
  } 
  else if (password.length > 8 && password.length <= 10 && specialCharCount < 4 && upperCaseCount < 4) {
    lengthStrength = "[Moderate] : easy to break 🤞🙂🤞, add more special and uppercase characters";
  } 
  else if (password.length > 10 && password.length <= 12 && specialCharCount < 5 && upperCaseCount < 4) {
    lengthStrength = "[Moderate] : Can be improved by increasing length 👍😉👍";
  } 
  else if (password.length > 12 && password.length <= 14 && specialCharCount < 4 && upperCaseCount < 3) {
    lengthStrength = "[Strong] : Difficult to break 👍😄👍";
  } 
  else if (password.length > 14 && password.length <= 16 && specialCharCount >= 4 && upperCaseCount >= 2) {
    lengthStrength = "[Strong] : very difficult to break 👌🤩👌";
  } 
  else if (password.length > 16 && password.length <= 50 && specialCharCount >= 3 && upperCaseCount >= 2) {
    lengthStrength = "[very strong passward] : very very difficult to break 💪😈💪 ";
  } 
  else if (password.length > 50 && specialCharCount >= 0 && upperCaseCount >= 0 ) {
    lengthStrength = "are bass kar bhai password hai ke kitaaab 📖💀😭 !!!!! ";
  } 
  else {
    lengthStrength = "add some special and uppercase characters";
  }

  strength.textContent = lengthStrength;
}
