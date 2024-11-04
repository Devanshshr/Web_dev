
// when using let you can initialize it again bt can't redeclare it
// block scope variable
let name="Bhumika";
console.log(name);
name="Prachi";
console.log(name);
// let name="Shivam"; can't redeclare it as it will give an error

// var : can redeclare it and as well as reinitialize it
// global scope variable
var age=12;
console.log(age);
age=13;
console.log(age);
var age =34;
console.log(age);

// const : can not redeclare as well can't re initialize it
// block scope variable

const gender="F";
console.log(gender);
// gender="M";
// console.log(gender); 
// above two lines will give an error

let a;
console.log(a);
var b;
console.log(b);
// const c; : it should be initialized when its declarred only otherwise it will give an error

const c=34;
console.log(c);

// primitive datatypes(7)
// number,string,boolean,undefined,
let price=24; //number
let names="Bhumika"; //string
let happening=true; //booolean
let x; //undefined
let y=null; //null typeof y :object
let xx=BigInt("123"); //bigint type 
let yy=Symbol("Hello") //symbol type 
// typeof price; we can use it to find datatype


//non-primitive datatypes
// 1.objects:it is a collection of different variables or values

const student={
    fullName:"Bhumika Chaudhary",
    age: 20,
    cgpa:8.0,
    isPass:true,
};

console.log(student);
console.log(student.age);
console.log(student["age"]);
console.log(student.cgpa);
student.age=14;
console.log(student);
student["age"]=student["age"]+1;
console.log(student);
