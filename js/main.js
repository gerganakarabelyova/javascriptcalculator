function equals() {     //The function that does the math 
  var x = eval(document.calculator.answer.value); 
    if(!isFinite(x)){  //if you divide by zero or do another mistake that equals Infinity, then this code gets executed
      document.getElementById("problemWithInputMessage").innerHTML="Impossible operation (maybe you did x/0)!";
    }
    else if (typeof(x)==="number"){    //if the expression is fine, do the math
    document.calculator.answer.value = eval(document.calculator.answer.value);
    }
    else {
      document.getElementById("problemWithInputMessage").innerHTML="Something went wrong!";
    }
}

function deleteSymbol() {    //Deleting the last input symbol after clicking the Del button
  var x = document.calculator.answer.value;
  x = x.substring(0, x.length - 1);
  document.calculator.answer.value = x;
}

function checking() {
  var x = document.calculator.answer.value;
  document.getElementById("problemWithInputMessage").innerHTML="";
    var regexNumbers = /[0-9]+$/;                       //Regular Expression for the numbers
    var regexSigns = new RegExp(/[\+\-\/\*]+$/g);       //Regular Expression for the Special Signs

    if(x.match(regexSigns) || x.match(regexNumbers)) {  //checking for Numbers and the Special allowed signs
        return true;
    }
    else {
      document.getElementById("problemWithInputMessage").innerHTML="You can only input numbers and the following signs + - * /";
      x = x.substring(0, x.length - 1); //Deleting the last symbol if it is not allowed
      document.calculator.answer.value = x;
      return false;
    }
}

function isItEnter() {
  if(event.keyCode == 13) { //if the key you pressed is Enter, then execute the code
    equals();
  }
}