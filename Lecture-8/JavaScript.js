
let arr = ["Ankit Kashyap", "Aniket Dubey", "Aryan Kumar", "Bobby Kumar"];
console.log(arr[0]);
console.log(arr[1]);

console.log("This is a new array - ");


//Arrays Objects can contain elements of different data types.
let a = ["Good Morning", 8, true, 98, "Good Night"];
let i = 0;
while (i <= a.length - 1)
{
    console.log(a[i]);
    ++i;
}

console.log("The data type of array object is: " + typeof(a));
console.log("The length of the array is: " + a.length);


//Array Methods

let x = a.toString();//Converts an array to a string.
console.log(typeof(x));
console.log("The converted string is: " + x);

let y = a.join("/");//joins all the array elements using a seperator in the form of a string.
console.log(typeof(y));
console.log("The converted string is: " + y);

let z = a.pop();//removes the last element of the array and returns the popped element.
console.log("The popped element is: " + z);
console.log("The new length of the array is: " + a.length);

let b = a.push("Happy Journey");//adds a new element at the end of the array and returns the new array length.
console.log("The new length of the array is: " + b);

let c = a.shift();//removes first element and returns the removed element.
console.log("The shifted element is: " + c);


let d = a.unshift("Happy Birthday");//adds element to the start of the array and returns the new array length.
console.log("The new length of the array is: " + d);

delete a[1];//deletes element at a specific index without changing the length of the array.
console.log("The length of the array after the delete operation is performed: " + a.length);

let result = a.concat(arr);//It concats the input arrays together and returns a new array.
console.log(result);

console.log("The sorted array is: " + a.sort());//It sorts the input array in alphabetical order. This method modifies the input array.


let e = a.splice(1, 1, "Hello", 8.965);//It modifies the input array and returns the array of deleted items.
console.log(e);
console.log("The array after splice operation is: " + a);

let f = a.slice(2, 4);//It returns a new array.
console.log(f);

console.log("The array after reverse operation is: " + a.reverse());//It reverses the elements in the input array.


