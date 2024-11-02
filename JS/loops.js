// 1.for loop
for(let i=1;i<=9;i++){
    console.log("Hii");
}
// console.log(i);
// above line will give an error because i has scope till block only
for(var j=1;j<=9;j++){
    console.log("Hii");
}
console.log(j);
// above line will not give an error because i is of type var which has global scope.

// infinite loops : a loop that never ends

// 2. while loop
let a=9;
while(a>0){
    console.log(a);
    a--;

}

//3. do while
// it will always run atleast one time

let m=0;
do{
    console.log(m);
}while(m>0);

//4. for-of loop : we use it for strings and arrays
// if we have to go at every value
let str="Heyyy";
for(let i of str){
    console.log(i);

}

// to calculate the size of a string
let strr="Hiiiii";
let size=0;
for(let i of strr){
    size+=1;
    

}
console.log(size);

// 5. for in loop : we use it for objects and arrays

let student={
    name:"Rahul",
    class:2,
    Roll_No:18,
};
for(let i in student){
    console.log(i); //it will return keys
}
for(let i in student){
    // console.log(student.i);
    // console.log(student["i"]);
    // above two lines will give an error beacuse i is variable not a string so we will use it without double quotes
    console.log(student[i]);
}
for(let i in student){
    console.log("key = ", i ," , value = ",student[i]);
}
