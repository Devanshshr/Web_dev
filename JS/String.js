// String : It is a sequence of characters and they are immutable
let str="Hii"; //you can use double or single quotes both
console.log(str.length);
console.log(str[0]);
console.log(str[4]); //undefined

// Template literals in java 
// they are strings only created using backticks
// a way to have embedded expressions in strings

let sentence= `This is a template literal`;
console.log(sentence);

// template literal is also a type of string bt it is used for

let obj={
    item:"pen",
    price:20,

};
console.log("the cost of ",obj.item, " is ",obj.price ," rupeess.");
console.log(`the cost of ${obj.item} is ${obj.price} rupeess`);
// in above line everything will become a part of string

// string interpolation
// to create strings by doing substitution of placeholders
// `string text ${expression} string text`
console.log(`This is a template literal ${2+3+4}`);

// escape characters
// they are also a part of strings
// length of escape characters is considered as 1 only not 2
console.log("Hii\nHeyy"); //next line
console.log("Hii\tHeyy"); //tab space that 4 
let str3="Hii\tHeyy"; //8
console.log(str3.length);

// String Methods:
// we use parentheses after using methods : because they are used to manipulate a string
// whereas length is a property we don't use (parentheses ) after it , and it returns a value only
str4="  Good  ";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());
console.log(str4.trim()); //removes whitespaces from start ans end
let newStr=str4.toUpperCase();
console.log(newStr);
console.log(str4.slice(3,5));
console.log(str4.slice(3));
console.log(str4.slice()); //complete string
let strr=str4.concat(newStr);
console.log(strr);
let strr1=str4.concat("fd");
console.log(strr1);
let strrrr=str4 + strr;
console.log(strrrr);
let p="hello";
console.log(p.replace("h","y"));
console.log(p.replaceAll("l","m"));
console.log(p); // no change in the original string
console.log(p.charAt(4));
