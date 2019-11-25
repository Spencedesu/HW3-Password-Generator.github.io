function randomPassword(length) {

  var length = prompt("How many characters do you want?")
  var lowerCharWant = confirm("Do you want lowercase characters?");
  var upperCharWant = confirm("Do you want uppercase characters?");
  var numbersWant = confirm("Do you want numbers?");
  var symbolsWant = confirm("Do you want symbols?");

  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symChars = "!@#$%^&*()";
  var numChars = "1234567890";

  var all = lowerChars + upperChars + symChars + numChars

  var pass = "";

  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * all.length);
      if (lowerCharWant === true) {
      pass += lowerChars.charAt(i);
      }
      if (upperCharWant === true) {
      pass += upperChars.charAt(i);
      }
      if (numbersWant === true) {
      pass += numChars.charAt(i);
      }
      if (symbolsWant === true) {
      pass += symChars.charAt(i);
      }
  }
  return pass;
}

function generate() {
  myform.row_password.value = randomPassword(myform.length.value);
}