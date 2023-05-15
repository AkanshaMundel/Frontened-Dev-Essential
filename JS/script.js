//comment
/* 
this is basic understanding og jaavscript 
let = "vishal course"*/
//variable 
// var - global 
// let - block level data type
let x = 3; 
console.log(x);
x = "aka"
console.log(x);
// let x= 9 //if we reinsitial let same keyword through erroe
var y = 3;
var y = "y vale"
console.log(y)
y = "change value"
console.log(y);//
console.log("restrt");

//operator
let a = 4 
let b= 3
console.log(a**b)
let c;
console.log(c);
console.log(NaN);
let marks = [1, 2, 3];
console.log(marks);
marks.shift();
console.log(marks)
let obj={
    len:1,
    "spce vari" : "anyname"
}
console.log(obj);
console.log(obj['spce vari']); //if there is spaace var name use [']to fetch value
//for each loop 
marks.forEach(add => {
    console.log(add);
});
//function
function hello(name="default") {
    console.log("hi,"+name);
}
const frnd= ["aka", "anu ","mansi"]
frnd.forEach((el)=>hello(el));

hello();
let arr=[1,2,3,4,4,5]

let arr2= arr.map((el)=>el*2);
let arr3= arr.filter((el)=>!arr2.includes(el));
let arr4= arr.reduce((total, sum)=> total+sum, 0);
console.log(arr2);
console.log(arr3);
console.log(arr4);