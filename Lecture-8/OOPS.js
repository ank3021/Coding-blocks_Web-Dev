
//Object can be declared using the object literal method.

let obj = {
    name:"Ankit Kashyap",
    age:20,
    College:"Maharaja Surajmal Institute of Technology",
    Class:"CSE-1",
    spectacles:true,
    func:function print() {
        console.log("I am inside the object !!!");
    }
}

console.log(typeof(obj.Class));
console.log(obj.Class);
console.log(obj.func());


//Object can be declared using the object constructor method.

function name(first_name, last_name)
{
    this.first_name = first_name;
    this.last_name = last_name;
    console.log(first_name + " " + last_name);
}

let my_name = new name('Ankit', 'Kashyap')

function marks(standard, highest_score)
{
    this.standard = standard;
    this.highest_score = highest_score;
}

let t = new marks('10th', 95.6);
console.log("This is the highest score of class " + t.standard + ": " + t.highest_score);


//Object can be declared using the class method

class fruit{
    constructor(name, taste, color){
        this.name = name;
        this.taste = taste;
        this.color = color
    }
}

let g = new fruit('mango', 'sweet', 'yellow');
console.log(g);

let fruit2 = class{
    constructor(name, taste, color){
        this.name = name;
        this.taste = taste;
        this.color = color
    }
}

let h = new fruit2('guava', 'sweet', 'green');
console.log(h);