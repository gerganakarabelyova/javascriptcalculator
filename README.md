# JavaScriptCalculator
# Used technologies: HTML, CSS, JavaScript
# Year: 2017
# Author: Gergana Karabelyova
# Purpose of code: internship entering task for Fork Point

This is a JavaScript calculator that I made as an internship entering task for Fork Point in 2017. 
It is not completely fool-proof, but it does have several checks, such as:
1. Entering only numbers and the special signs +-/* This part works only if you type at the back of the string. It does not work
   if you put the cursor in the middle of the input string. There (in the middle) the code doesn't work properly and you can easily
   input letters and stuff that doesn't belong in a calculator input field.
2. It doesn't have a proper check for dividing by zero.
3. It doesn't have a proper input field limit. The limit in the HTML code of 19 chars works if you input the symbols from the keyboard,
   but if you input from the buttons, the limit doesn't work and you can type outside of the view area.
   
The JavaScript Calculator uses Regular Expressions to check for numbers and special symbols and to exclude letters and other symbols.
