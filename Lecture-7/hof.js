function creategreeter(greeting){
         function greet(name)
         {
            console.log(greeting, name);
         }
     return greet;
}


let g1 = creategreeter('Good Morning');
let g2 = creategreeter('Good Evening');
console.log(g1("Ankit"));
console.log(g2("Nikhil"));