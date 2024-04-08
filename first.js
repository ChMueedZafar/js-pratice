// // variables pratice
// {
//     const a = 5;
//     console.log(a)
// }
// {
//     let b = 10;
//     console.log(b);
// }
// {
//     var c = 15;
//     console.log(c);
// }
// //#data type
// //1- primitive data type
// {
// let age = 18;
// console.log(age);
// }
// {
//     isfolow = true;
// }
// let x= null;

// let g = BigInt("123");
// let y =  Symbol("hello")
// // 2- non-primtive or objects
// const student ={
//     fulname : "mueed zafar",
//     age : 18,
//     cgpa : 8.2,
//     ispass: true,
// };
// student["age"] = student["age"]+1;

// console.log(student.age);
// // pratice 1
// const product = {
//     title:"Ball pen",
//     ratting: 4,
//     offer: 5,
//     price:270,
// };
// console.log(product)
// const porfile = {
//    username:"@mueedzafar",
//    isfolow: false,
//    followers: 123,
//    following:123
// };
// console.log(porfile)
// // comments
// console.log("hello world!")
// // operators in js
// // 1- artimetice operator
// let a = 5;
// let b = 2;

// console.log("a+b",a + b);
// console.log("a-b",a - b);
// console.log("a*b",a * b);
// console.log("a/b",a / b);
// console.log("a%b",a % b);
// console.log("a**b",a ** b);

// console.log("Function")

// // logic operators
// let z = 3;
// let v = 5;
// console.log("!(3 < 5)=",!(z < v));

// if and if else comditions

// let num = prompt("entre a number");

// if (num % 5 === 0){
//   console.log(num, "is multiple of 5");  
// }else{
//     console.log(num ,"is not multiple of 5");
// }

let scor =prompt("entre a number 0-100")
let grade;


if (scor>= 90 && scor <= 100){
    grade ="A"
}
else if(scor>=80 && scor <= 89){
    grade ="B"
}
else if(scor>=70 && scor <= 79){
    grade ="C"
}
else if(scor>=60 && scor <= 69){
    grade ="D"
}
else if(scor>=50 && scor <= 59){
    grade ="E"
}
else if(scor>=0 && scor <= 49){
    grade ="F"
}

console.log("According to your scor your grade was"+ grade);



