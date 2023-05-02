
//creategreeter is an higher order function, as it is returning function greet as an entity.
function creategreeter(greeting){
         function greet(name)//greet is also an higher order function, as it has the function getname as the input parameter.
         {
            console.log(greeting, name);
         }
     return greet;
}

function getname(){
    return document.getElementById("namebox").value;
}


let g1 = creategreeter('Good Morning');
let g2 = creategreeter('Good Evening');
console.log(g1("Ankit"));
console.log(g2("Nikhil"));


/*In javaScript, functions are first class citizens which means that they can be treated like variables. Functions can be passed by higher order functions, can be used as an
argument and updated.*/
/*return function_name --> It returns the function (complete function body)
  return function_name() --> It returns the value passed by the function*/ 