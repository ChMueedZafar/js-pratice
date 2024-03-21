// variables pratice
{
    const a = 5;
    console.log(a)
}
{
    let b = 10;
    console.log(b);
}
{
    var c = 15;
    console.log(c);
}
//#data type
//1- primitive data type
{
let age = 18;
console.log(age);
}
{
    isfolow = true;
}
let x= null;

let g = BigInt("123");
let y =  Symbol("hello")
// 2- non-primtive or objects
const student ={
    fulname : "mueed zafar",
    age : 18,
    cgpa : 8.2,
    ispass: true,
};
student["age"] = student["age"]+1;

console.log(student.age);
// pratice 1
const product = {
    title:"Ball pen",
    ratting: 4,
    offer: 5,
    price:270,
};
console.log(product)
const porfile = {
   username:"@mueedzafar",
   isfolow: false,
   followers: 123,
   following:123
};
console.log(porfile)
// comments
console.log("hello world!")
// operators in js
// 1- artimetice operator
let a = 5;
let b = 2;

console.log("a+b",a + b);
console.log("a-b",a - b);
console.log("a*b",a * b);
console.log("a/b",a / b);
console.log("a%b",a % b);
console.log("a**b",a ** b);
// unairy operators
console.log("ch mueed zafar");
let k = 8;
let q = 9;
console.log("k+q",k + q);
++k
console.log(k);
q++
console.log(q);
// Assignment operators
let v = 5;
let z = 2;
v += 4; 
console.log("v = ",v);
z -=3
console.log("z =",z);
v *= 4; 
console.log("v = ",v);
z /=3
console.log("z =",z);
v %= 4; 
console.log("v = ",v);
z **=3
console.log("z =",z)

 



