//using prompt-sync module function to take input
const readline = require("prompt-sync");
const prompt=readline();
//taking user input
let pin = prompt("Enter PIN : ");
//regular expresion for 6 digit code and first should not be letter
let pinRegExp = RegExp('^[1-9]{1}[0-9]{5}$');
//with test method checking if pin is valid or not and print
if(pinRegExp.test(pin))
	console.log("Valid Pincode");
else
	console.log("Invalid Pincode");