//Function Hoisting in JavaScript
greetings();



//Function in JavaScript
function greetings()
{
    console.log("Hello there, have a nice day !!!!");
}


//When Function is declared using let, var and const, then that function is not hoisted in the browser window.
let win = function(input){
    if (input === 'win')
    {
        console.log("You won the game !!!");
    }
    else
    {
        console.log("You lost the game !!!");
    }
}

win('win');



//Polymorphism in JavaScript
area(4,5);
area(6);


function area(height, width){
    if ((typeof(width) === 'undefined') || (typeof(height) === 'undefined'))
    {
        let area = Math.PI*height*height;
        console.log("The data type of the parameters are: " + typeof(height) + " " + typeof(width));
        console.log("The area is: " + area);
    }

    else
    {
    let area = height*width;
    console.log("The data type of the parameters are: " + typeof(height) + " " + typeof(width));
    console.log("The area is: " + area);
    }
}

function hello(){
    console.log("I am here !!!");
    let n = arguments.length
    let i = 0;
    while (i <= n - 1)
    {
        let a = i + 1;
        console.log("The " + a + " argument is: " + arguments[i]);
        ++i;
    }
}

hello(1,2,3,4);//In JavaScript, any number of arguments can be passed in the declared functions.
hello("Ankit", "Kashyap");


