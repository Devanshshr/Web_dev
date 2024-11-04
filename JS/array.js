// array:collection of items or collection of similar type of items
// it is also a special type of object
// it is mutable
let marks=[98,90,98,97,96];
let obj=[34,"hii","ef"];
console.log(marks);
console.log(marks.length);
console.log(marks[0]);
console.log(marks[5]); //undefined;
marks[2]=66;
console.log(marks);
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
for(let i of marks){
    console.log(i);
}
for(let i in marks){
    console.log(marks[i]);
}
let sum=0;
let mark=[85,97,44,37,76,60];
for(i of mark){
    sum+=i;
}
console.log(sum/6);
console.log(`avg marks are ${sum/6}`);

let item=[250,6645,300,900,50];
for(let i in item){
    item[i]=item[i]-(item[i]/10);
}
console.log(item);

// methods of array
// 1.push():add to end
// 2.pop():delete from end and return
// 3.toString():converts array to string
// 4.concat():joins multiple arrays and returns the result
// 5.unshift():add to start
// 6.shift():delete from start and return
// 7.slice():returns a piese of the array
// 8.splice():change original array(add,remove,replace) : splice(startIdx,delCount,newEl1..)
item.push(4556);
console.log(item);
console.log(item.pop());
console.log(item);
console.log(item.toString());
let str=item.toString();
console.log(str);
console.log(mark.concat(item,marks,obj));
console.log(item.unshift(34));  //it will return the length of the updated array
let val=item.unshift(56); //length of the new updated array
console.log(val);
console.log(item);
let vall=item.shift(); //returns the deleted value
console.log(vall); 
console.log(item);
console.log(item.slice(0,2));
console.log(item);
item.splice(2,2,101,102,89); 
console.log(item);

let num=[1,2,3,4,5,6,7];
console.log(num.splice[3,0,105]); //undefined
console.log(num);
num.splice(2) //it will delete all the element from index 2 and will change the original array accordingly
console.log(num); 

company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
console.log(company.shift());
console.log(company);
company.splice(1,1,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);
