console.log("Hello World");
console.log("JavaScript Basics are very important to learn web development.");
let z = prompt("Enter your name - ");  //The prompt method always return a string value.
let x = confirm("Do you want to continue ??");  //The confirm method always return a boolean value.
if ((x == true) && (z != null))
{
    console.log("The user clicked yes !!!");
    console.log("The name of the user is: " + z);
}

else if ((x == true) && (z == null))
{
    console.log("The user clicked yes !!!");
    console.log("The user didn't provided the name !!!");
}

else 
{
    console.log("The user denied !!!");
}



//Data types in JavaScript
console.log(85, typeof(85));
console.log(8.965, typeof(8.965));
console.log('Hello', typeof('Hello'));
console.log('A', typeof('A'));
console.log(true, typeof(true));
const result = {
    Area:'Mahavair Enclave',
    City:'New Delhi',
    State:'Delhi',
    Country:'India'
}
console.log(typeof(result));
let p;
console.log(typeof(p));
console.log(null, typeof(null));




//The prompt method always return a String, So in every case irrespective of the input, 'i' will be of String data type !!!!
let i = prompt("Enter the value of the operand !!!");
if (typeof(i) === `null`)
{
    console.log("The data type of input is null !!!");
}
else if (typeof(i) === `Number`)
{
    console.log("The data type of input is Number !!!");
}
else if (typeof(i) === `string`)//The typeof() method will return `string`, for the String data type.
{
    console.log("The data type of input is String !!!");
}
else if (typeof i === `Symbol`)
{
    console.log("The data type of input is Symbol !!!");
}
else if (typeof i === `Boolean`)
{
    console.log("The data type of input is Boolean !!!");
}
else if (typeof i === `BigInt`)
{
    console.log("The data type of input is BigInt !!!");
}
else if (typeof i === `undefined`)
{
    console.log("The data type of input is undefined !!!");
}