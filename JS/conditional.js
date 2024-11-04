// if statement

let age=25;
if(age>18){
    console.log("You can vote");
}
if(age<18){
    console.log("You can not vote");
}

// if-else statement

let mode="dark";
let color;
if(mode=="light"){
    color="white";
}
else{
    color="black";
}
console.log(color);


// else-if

let temp=60;
if(temp>100){
    console.log("Too Hot");
}
else if(temp>50){
    console.log("Hot");
}
else{
    console.log("Normal");
}

// we can also use it like:

if(true) console.log("Hii");


// switch-case:

let value="Hii";
switch(value){
    case "Hii":
        console.log(1);
        break;
    case "Hello":
        console.log(2);
    case "Namaste":
        console.log(3);
    default:
        console.log(4); 
}
