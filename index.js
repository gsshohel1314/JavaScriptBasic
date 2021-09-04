// 1. Ways to print in JavaScript
// alert("Ok");
// document.write("This is document write");

// 2. JavaScript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warnning");
// console.error("This is an error");

// 3. JavaScript comments
// Single line comment

/*
multi 
line 
comment
*/

// 4. JavaScript variables
// What is variables? a container which is store data values
var number1 = 35;
var number2 = 15;
// console.log(number1 + number2);

// 5. Datatypes in Javascript
/*
There are two types of datatype in JavaScript:
1. Primitive Datatype: number, string, boolean, undefined, null and symbol
2. Reference Datatype: Objects and Arrays
*/
// Primitive Datatype:
// Number:
var num1 = 35;
var num2 = 50;
// console.log(num1, num2);

// string:
var str1 = "This is a string";
var str2 = 'This is also a string';
// console.log(str1);
// console.log(str2);

// boolean:
var a = true;
var b = false;
// console.log(a, b);

// undefined:
var und1;
var und2 = undefined;
// console.log(und1, und2);

// null:
var n = null;
// console.log(n);

// symbol datatype describe in later

// Reference Datatype:
// Objects:
var marks = {
    shohel : 99.97,
    bablu : 34,
    korim: 75
}
// console.log(marks);

// Arrays:
var arr = [1, 2, 3, "This is string", 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr[3]);

// 6. Operators in Javascript
// Arithmetic operators:
var a = 100;
var b = 10;
// console.log("The value of a + b is:", a+b);
// console.log("The value of a - b is:", a-b);
// console.log("The value of a * b is:", a*b);
// console.log("The value of a / b is:", a/b);

// Assignment operators:
var c = b;
c += 2  //c = c + 2 
c -= 2  //c = c - 2
c *= 2  //c = c * 2
c /= 2  //c = c / 2
// console.log(c);

// Comparison operators:
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators:
// Logical and (&&) operato:
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or (||) operator:
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not (!) operator: true k false r false k true kore.
// console.log(!true);
// console.log(!false);

// Note: a + b; ekhane operator holo + r operants holo a and b.

// 7. Function in Javascript
function avg(a, b){
    c = (a + b) / 2;
    return c;
}
// DRY = Do not Repeat Yourself.
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

function toCelsius (fahrenheit){
    return (5/9) * (fahrenheit-32);
}
f1 = toCelsius(98);
f2 = toCelsius(77);
// console.log(f1);
// console.log(f2);

// 8. Conditional statement in Javascript
// if statement
var age = 28;
if(age > 18){
    // console.log("You are not a kid");
}

// else statement
var age = 10;
if(age > 18){
    // console.log("You are not a kid");
}else{
    // console.log("You are a kid");
}

// else if statement
var marks = 100243;
if(marks < 40){
    console.log("Fail");
// }else if(marks >= 40 && marks < 50){
    console.log("D Grade");
// }else if(marks >= 50 && marks < 60){
    console.log("C Grade");
// }else if(marks >= 60 && marks < 70){
    console.log("B Grade");
// }else if(marks >= 70 && marks < 80){
    console.log("A Grade");
// }else if(marks >= 80 && marks <= 100){
    console.log("A+ Grade");
}else{
    // console.log("Your marks not found!!");
}

// 9. loops in Javascript
// for loop:
for(var i=1; i<=100; i++){
    // console.log(i);
}

var arr = [1,2, 3, 4, 5, 6, 7];
for(var i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

// forEach Loop:
arr.forEach(function(element){
    // console.log(element);
})
arr.forEach(element => {
    // console.log(element);
})

// while loop:
let j = 0;
while(j<arr.length){
    // console.log(arr[j]);
    j++;
}

// do while loop:
let k = 0;
do{
    // console.log(arr[k]);
    k++;
}while(k < arr.length);

// 10. Break and Continue Statements in Javascript
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0; i<arr1.length; i++){
    if(i==4){
        // break;
        continue; //continue mane ei iteratin k cancle kore diye poroborti iteration k continue koro.
    }
    // console.log(arr1[i]);
}

// 11. Array Methods in Javascript
let myArr =['fan', 'camera', 24, null, true];
// console.log(myArr.length); //array length show kore
// myArr.pop(); //last element remove kore
// console.log(myArr);
// myArr.push("Shohel"); //last ekti new element add kore
// console.log(myArr);
// myArr.shift(); //fast element remove kore
// console.log(myArr);
// myArr.unshift("Shohel");
// console.log(myArr);
// const newLen = myArr.unshift("NewElement");
// console.log(newLen);
// console.log(myArr.toString()); //array k string e convert kore.

// let newArr = [1, 23, 45, 78, 24234]; //prothome array k string e convert kore then alphabetically sort kore.
// console.log(newArr.sort());


// 12. String Methods in Javascript
let myString = "Shohel is a good boy good";
// console.log(myString.length); //string er length print kore.
// console.log(myString.indexOf("good")); //matching first string k search kore.
// console.log(myString.lastIndexOf("good")); //matching last string k search kore.
// console.log(myString.slice(12,18)); //parameter first index thke last parameter index -1 porjonto print kore.
// let d = myString.replace("good", "bad");
// console.log(d);
// let e = d.replace("good", "dusto chele");
// console.log(e);

// 13. Dates in Javascript
let myDate = new Date(); //new keyword ekhane notun date create kore.
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// 14. DOM Manipulation in JavaScript
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

let tn = document.getElementsByTagName("button");
// console.log(tn);
let dn = document.getElementsByTagName("div");
// console.log(dn);

let createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
dn[0].appendChild(createdElement);

let replaceElement = document.createElement('b');
replaceElement.innerText = "This is a replace bold para";
dn[0].replaceChild(replaceElement, createdElement);

// dn[0].removeChild(replaceElement);

// selecting using query
let qSel = document.querySelector('.container');
// console.log(qSel);
let qSelAll = document.querySelectorAll('.container');
// console.log(qSelAll);

// console.log(document);
// console.log(document.location);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.scripts);
// console.log(document.links);
// console.log(document.images);
// console.log(document.domain);

// 14. JavaScript Events
// window.onload = function(){
//     console.log("The document was loaded");
// }

// function clicked(){
//     console.log("The button was clicked.");
// }

// firstContainer.addEventListener('click', function(){
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container');
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container");
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when click on container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log("Mouse down when click on container");
// })

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>";
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";
//     console.log("Mouse down when click on container");
// })

// let previousHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = previousHTML;
//     console.log("Mouse up when click on container");
// })

// 15. Arrow Function
// normarl function
// function summ(a,b){
//     return a+b;
// }

// arrow function
summ = (a,b)=>{
    return a+b;
}

// 16. JavaScript  setTimeout and setInterval
// setTimeout
// kono kaj k schedule onujay koranor jonno setTimeout use kora hoy.
logKoro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "setTimeout fired";
    console.log("I am your log");
}
// clr = setTimeout(logKoro, 5000);

// setInterval
// r kono kaj repatedly koranor jonno setInterval use kora hoy.
// clr = setInterval(logKoro, 3000);
// Note: use clearTimeout(clr)/clearInterval(clr) to cancel setTimeout/setInterval. 

// 16. JavaScript localStorage
// console.log(localStorage);
// localStorage.setItem('name','Shohel');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name'); // remove one item.
// localStorage.clear(); // use for clear local storage.

// 17. JavaScript JSON
// JSON = JavaScript Object Notation. ja data k exchange korar jonno babohar kora hoy.
obj = {name: "Shohe", length: 1, a: {this: "that"}};
// object k string e exchange korer code.
jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// string k object e exchange korer code.
parse = JSON.parse(`{"name":"Shohe","length":1,"a":{"this":"that"}}`);
// console.log(parse);

// 18. JavaScript Version
// ECMAScript = ECMAScript is a standered. ja JavaScript k maintain kore. 

// 18. Template Literals - Backticks(``) in JavaScript
let aaa = 34;
// console.log(`This is ${aaa}`);