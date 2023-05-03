//String Declaration

let a = "I am Ankit Kashyap.";//Strings can be initialized using double quotes.
console.log(a);

let b = 'I am a CSE student.';//Strings can be initialized using single quote.
console.log(b);

let c = `I live in New Delhi.`;//Strings can be initialized using backtics.
console.log(c);


//Escape sequence characters

let d = "Today\'s a rainy \" day";
console.log(d);

let e = "Today\'s a beautiful \" morning";
console.log(d);

//String interpolation

let city = `Mahavir Enclave`;
let state = `Delhi`;

let print = `I live in ${city}, which is located in ${state}.`;
console.log(print);



//String methods
let f = `Strings and Arrays are important.`;
let length = f.length;//It returns the length of the string.
console.log(length);

f = f.toUpperCase();//It converts all the characters of the string to Uppercase characters.
console.log(f);

f = f.toLowerCase();//It converts all the characters of the string to Lowercase characters.
console.log(f);

f = f.slice(20, 28);//It returns the characters of string from starting index to ending index - 1.
console.log(f);

let g = `JavaScript is a dynamic and loose language.`;
g = g.slice(20);//It returns the characters of string from starting index to last index.
console.log(g);

let h = 'I am a good boy.'
let result = h.split('-', 3);//It splits the string into substrings using the specified seperator and return them as an array.
console.log(result);

let ans = h.indexOf('good');//It returns the first index of occurence of the string literal in the input string.
console.log(ans);

let ans2 = h.lastIndexOf('o');//It returns the last index of occurence of the string literal in the input string.
console.log(ans2);






