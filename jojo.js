




function generatePassword() {

  var numChars = prompt("How many chars do you want?");
var symbWanted = confirm("Do you want special chars?");
var lowerWanted = confirm("Do you want lowercase chars?");
var upperWanted = confirm("Do you want uppercase chars?");
var numWanted = confirm("Do you want numbers?");

var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialArr = ["!","@","#","$","%","&","*",];
var numArr = ["1","2","3","4","5","6","7","8","9","0"];

var finalPassword = "final placeholder";
var passwordDisplay = document.getElementById("password");
//passwordDisplay.innerHTML = finalPassword;

var constructedPassword = '';

  //if (len(tempPassword)<=numChars)
  //length check - how to stop a function from executing at certain point.
  // use a return .
  // number of values -- whats going on with loop - too many characters.

  for (var i=0; i < numChars; i++) {

    var randomSpecialIndex= Math.floor(Math.random()* specialArr.length);
    // do I need something in between here to add incrementer ->would help with the problem of cutting at some length,
    //eventually the value is going to have to increase to the point where > numChar, which could be 1 could be 100.
    var randomSpecial = specialArr[randomSpecialIndex];
    
    var randomLowerIndex = Math.floor( Math.random() * lowerArr.length );
    var randomLower = lowerArr[randomLowerIndex];
    
    var randomUpperIndex = Math.floor(Math.random()* upperArr.length );
    var randomUpper = upperArr[randomUpperIndex];
    
    var randomNumIndex = Math.floor(Math.random()* numArr.length);
    var randomNum = numArr[randomNumIndex];
    console.count('inside the loop');
    // var character = Math.floor(Math.random() * all.length);
    
    
    // password += all.substring(character, character + 1);
    
    if (lowerWanted === true) {
      console.log('lowerWanted is true and constructed password is: ', constructedPassword)
      constructedPassword = constructedPassword + randomLower;
      
      console.log('after updating the constructed password it now is: ', constructedPassword)
    }
    if (upperWanted === true) {
      console.log('upperWanted is true and constructed password is: ', constructedPassword)
      constructedPassword = constructedPassword + randomUpper;
     
      console.log('after updating the constructed password is: ', constructedPassword)
    }
    if (numWanted === true) {
      console.log('numWanted is true and constructed password is: ', constructedPassword)
      constructedPassword = constructedPassword  + randomNum;
      
      console.log('after updating the constructed password is: ', constructedPassword)
    }
    if (symbWanted === true) {
      console.log('symWanted is true and constructed password is: ', constructedPassword)
      constructedPassword = constructedPassword  + randomSpecial;
      
      console.log('after updating the constructed password is: ', constructedPassword)
    }
    if (lowerWanted === false && upperWanted === false && numWanted === false && symbWanted === false) {
      alert("Must choose at least 1 type of character");
      generate();
    }
    const finalPassword = generatedPassword.slice(0, length);
    passwordDisplay.innerHTML = finalPassword;

  }
  console.log(randomLowerIndex + " = random lower index");
  console.log(randomLower + " = random lower");
  console.log(randomSpecialIndex + " = random special characer");
  console.log(numChars + " = password length");
  console.log(symbWanted + " = special chars");
  console.log(lowerWanted + " = lower chars");
  console.log(upperWanted + " = upper chars");
  console.log(numWanted + " = num chars");
}
// add event listener to the generate password button
document.getElementById('generate').addEventListener('click', function() {
// inside that listener call the generate password function
  generatePassword();
});