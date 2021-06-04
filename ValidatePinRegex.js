//using prompt-sync module function to take input
const readline = require("prompt-sync");
const prompt=readline();
//taking user input
let pin = prompt("Enter PIN : ");
//regular expresion for 6 digit code and start and end restricts alphabet and space after three digits
let pinRegExp = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
//with test method checking if pin is valid or not and print
if(pinRegExp.test(pin))
	console.log("Valid Pincode");
else
	console.log("Invalid Pincode");