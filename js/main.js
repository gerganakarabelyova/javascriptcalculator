function equals() {     //The function that does the math 
  document.getElementById("problemWithInputMessage").innerHTML="";
  var regexNumbers = /[0-9]+$/;            //Regular Expression for the numbers
  var regexSigns = /[\+\-\/\*\.]+$/g;       //Regular Expression for the Special Signs
  var check1 = false; // if check1 is FALSE than the string is OK, if TRUE string is NOT OK
  var str = document.calculator.answer.value;
  var n = str.length;
   if(!str[n-1].match(regexSigns)){ //if the last char of the string is NOT a sign, then we can continue
      for(i=0; i<n-1; i++){   //check the whole string for sign positions
        if(str[i].match(regexSigns) && str[i+1].match(regexSigns)){ //if two signs are together, the expression is invalid
        check1=true;
        }
        if(str[i]==="+" && str[i+1]==="-") check1=false; // weird case where user want to sum with a negative number
// -----weird cases where user is too lazy to write 0.N and instead writes .N
        if(str[i]==="+" && str[i+1]===".") check1=false; 
        if(str[i]==="-" && str[i+1]===".") check1=false; 
        if(str[i]==="*" && str[i+1]===".") check1=false; 
        if(str[i]==="/" && str[i+1]===".") check1=false; 
// --------------------------------------------------------------------------
      }
   } else if(str[n-1].match(regexSigns)) check1=true; // if the last symbol is a sign, the expression is not valid
  
    if(check1===false){ //if all checks were OK, we can start with the actual math

        var x = +(eval(str)).toFixed(10); //rounding to avoid the binary conversion 0.1+0.2 = 0.300---4 problems
      
          if(!isFinite(x)){  //if you divide by zero or do another mistake that equals Infinity, then this code gets executed
          document.getElementById("problemWithInputMessage").innerHTML="Impossible operation (maybe you did x/0)!";
          }
    
          else if (typeof(x)==="number"){    //if the expression is fine, do the math
          document.calculator.answer.value = x;
          }
          
          else {
          document.getElementById("problemWithInputMessage").innerHTML="Something went wrong!";
          }
     }
     
     if(check1===true){
       document.getElementById("problemWithInputMessage").innerHTML="Wrong expression!";
     }
}

function deleteSymbol() {    //Deleting the last input symbol after clicking the Del button
  var x = document.calculator.answer.value;
  x = x.substring(0, x.length - 1);
  document.calculator.answer.value = x;
  document.getElementById("problemWithInputMessage").innerHTML="";
}

function clearing(){
  document.getElementById("problemWithInputMessage").innerHTML="";
  document.calculator.answer.value="";
}

// ----------------------- no longer useful functions --------------------------
function checking() {  // --THIS FUNCTION was useful when the keyboard input was enabled.
                       // --I disabled it to prevent mistakes and entering letters or weird signs
  var x = document.calculator.answer.value;
  var regexNumbers = /[0-9]+$/;                       //Regular Expression for the numbers
  var regexSigns = new RegExp(/[\+\-\/\*\.]+$/g);       //Regular Expression for the Special Signs
  document.getElementById("problemWithInputMessage").innerHTML="";
  
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

function isItEnter() {  // --THIS FUNCTION was useful when the keyboard input was enabled.
                        // --I disabled the keyboard input so I can lower the error count by limiting
                        // --the input to the buttons only (no letters available, nor strange signs)
  if(event.keyCode == 13) { //if the key you pressed is Enter, then execute the code
    equals();
  }
}
