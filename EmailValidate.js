//using prompt-sync module function to take input
const readline = require("prompt-sync");
const prompt=readline();
//taking user input of email id which we need to validate
let email = prompt("Enter Email : ");
//regex to validate email before @ and ensure @ symbol
const emailRegex = RegExp('^[A-Z a-z 0-9 !#$%&*.]{1,}[@]{1}[A-Z a-z 0-9 !#$%&*.]*$');
//with test method checking email valid or not
if(emailRegex.test(email))
	console.log("Valid Pincode!");
else
	console.log("Invalid Pincode!");