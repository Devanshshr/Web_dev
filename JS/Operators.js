// 1 .Arithmetic operators 
let a=3;
let b=4;
console.log("a = ",a , "& b = ",b);
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
// exponentiation : power
console.log("a ** b = ",a**b);
// Unary Operator : increment & decrement
console.log(++a);
console.log(b--);
console.log(a);

// Here we have post and pre increment

// 2. Assignment operator
let c=23;
console.log(c+=1);
console.log(c-=1);
console.log(c/=23);
console.log(c%=1);
console.log(c**=2);

// 3. comparison operators
// to compare two values
console.log(3==4); //equal to
console.log(3!=4); //not equal to
console.log(52=="52"); //true
//if there is a single number in string only then javascript implicitly converts it to a number then comapares it

// but if we don't want it to return true then we use stricter version of euals to and not equals to that is:
// double equals to used to check only the values are stored inside
console.log(5===5); //true
console.log(5==="5"); //false
let d=3;
var e=3;
console.log(d==e); // true as both are equal numbers
console.log(d===e); //true as both are equal numbers
console.log(3!="3"); //false as it will check value only which are equal 
console.log(3!=="3"); //true as it will check type as well with value
console.log(5>8);
console.log(3<5);
console.log(3<=5);
console.log(4>=4);

// logical opetators : evaluates multiple expressions

console.log(3>2 && 4>5);
console.log(3>2 || 7<4);

// ternary operator 
 
let age=23;
console.log(age>18? "Adult" : "Not Adult");
age=12;
age>18? console.log("Adult") : console.log("Not adult");
