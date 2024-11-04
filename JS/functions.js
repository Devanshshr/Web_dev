// function:block of code that performs a specific task
// and they are also used to minimize redundancy
function myFunction(){
    console.log("Welcome");
    console.log("We are learning JS");
}

myFunction();

function myFunction1(msg){
    // parameter-->input (msg) :used in the function definition
    console.log(msg);
}
myFunction1() //undefined
myFunction1("Hii") //argument is passed during function call or when invoking the function 
console.log("hii"*8); // \it will return not a number(NaN) you can't multiply a string with a number
console.log("hii"+4); //it will return a string "hii4" 

//function to calculate sum of two numbers

function sum(a,b){
    // a and b are the local variables of the function and they have block scope
    return a+b;
}
console.log(sum(4,5));
// conaole.log(a); //undefined
console.log(sum(3,5));
// Modern JS
// Arrow function : It is a compact way to write a function
const arrowsum=()=>{
    console.log("Hii");
};
arrowsum();
console.log(arrowsum);

let arrowmul=(a,b)=>{
    return a*b;
}
console.log(arrowmul(3,4));
console.log(arrowmul);
console.log(sum); //function definition
console.log(sum()) //nan
console.log(sum(3,4)) //function will implement
// now arrowsum and arrowmul are function variables

// function that returns the vowels in a string
function vowelCount(s){
    let c=0;
    for(let i of s){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            c++;
        }

    }
    return c;
}
console.log(vowelCount("fasuitgj"));

// arrow function for the same task
const countV=(s)=>{
    let c=0;
    for(const i of s){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            c++;
        }

    }
    return c;
}
console.log(countV("abc"));


// function:performs some task on the basis of input and gives us certain output 
// method: when a function is associated with an object it becomes a method
// ex:s.toUpperCase() is a method because it is associated with a string as it is bound with string thats why it is a method
// so methods are functions only which are associated with a paricular data structure

// functions in java script can be treated as normal variables they can be passed as argument and can be returned as well in other functions
// call back functions:they are passed as an argument to another functions

// forEach loop in arrays
// arr.forEach(call back function)
// We can pass three arguments in for each call back function that are value,index and the array itself.

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){ //val:each value at each index
    console.log(val);

});
let arr1=[4,5,6,78];
arr1.forEach(function myVal(val){
    console.log(val);
});

arr1.forEach((val,i,arr1)=>{
    console.log(val , i , arr);

});

// Higher order methods/functions : which uses other functions as parameters or return other functions as values
// ex:for each method

const arr4=[1,2,3,4,5,6];
arr4.forEach(function(val){
    console.log(val*val);

});

function square(val){
    console.log(val*val);

}
arr4.forEach(square);

// some other array methods
// 1.map : creates a new array : here also we can pass three parameters (value,index and array)
// non change in the original array

arr4.map((val)=>{
    console.log(val);
});
const arr5=arr4.map((val)=>{
    return val;
});
console.log(arr5);
arr4.forEach((val)=>{
    console.log(val);
});

// Difference between forEach and map in js as both are used to iterate values of an array
// forEach is used to print something or for some calculation whereas map returns some value as well or to create a new array

// 2.filter method : creates a new array of elements that retun true for a condition/filter
// no change in the original array

const arr6=arr4.filter((val)=>{
    return val%2==0;
});
console.log(arr6);

// 3. reduce:performs some operations & reduces the array to a single value. It returns that single value
// it takes 2 parameters one is previous value and other one is current value
const output=arr4.reduce((prev,cur)=>{
    return prev+cur;
});
console.log(output);

// find the largest element
const ans=arr4.reduce((prev,curr)=>{
    return prev>curr?prev:curr; 
});
console.log(ans);

const marks=[100,90,85,67,89,93,93,98,99];
const newMarks=marks.filter((val)=>{
    return val>90;
});
console.log(newMarks);

// take input n from user and print numbers from 1 to n
let num=prompt("Enter a number");
let i=1;
let array=[];
while(i<=num){
    array.push(i);
    i++;
}
console.log(array);
const anss=array.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(anss);
const ansp=array.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(ansp);
