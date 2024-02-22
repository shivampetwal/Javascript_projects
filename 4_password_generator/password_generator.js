function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let password = "";
    let allowedChar = "";
    allowedChar += includeLowercase ? lowercase : "";
    allowedChar += includeUppercase ? uppercase : "";
    allowedChar += includeNumbers ? numbers : "";
    allowedChar += includeSymbols ? symbols : "";

    if (length < 5) {
        return "Password length must be at least 5.";
    }

    if (allowedChar.length === 0) {
        return "Select at least one option.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    return password;
}

const myButton = document.getElementById("btn");
myButton.onclick = function () {
    const length = document.getElementById("ip").value;
  
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("mh").textContent = password;
};