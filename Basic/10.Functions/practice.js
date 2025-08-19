/*

# **1. Named Functions (10 Questions)**

a) Without argument & without return type

2. Write a named function to display numbers 1 to 5.

b) With argument & without return type
4) Write a named function that prints the multiplication table of a given number.

c) Without argument & with return type
6) Write a named function that returns a random number between 1–100.

d) With argument & with return type
8) Write a named function that returns the square of a given number.
10) Write a named function that checks if a string is palindrome and returns true/false.

*/
// 1. Write a named function to print "Hello World".
// function sayHello(){
//     console.log("Hello World");
// }
// sayHello();
// 3) Write a named function that prints a given name.
// function printname(str){
//     console.log("Your name is",str);
// }
// printname("Raj");

// 5) Write a named function that returns today’s date.

// function getdate(){
//     return new Date();
// }

// console.log(getdate());
// 7) Write a named function that returns the sum of two numbers.
// function addition(n1,n2){
//     return n1+n2;
// }
// console.log("Addition :",addition(100,200));

// 9) Write a named function that returns the factorial of a number.

// function getfactorial(n){
//     var fact = 1;
//     for (let i = 1; i <=n; i++) {
//         fact*=i;
//     }
//     return fact;
// }

// console.log("Factorial : ",getfactorial(5));
/*

# **2. Function Expressions (10 Questions)**

a) Without argument & without return type

2. Write a function expression to display even numbers up to 20.

b) With argument & without return type
4) Write a function expression to print whether a number is even or odd.

c) Without argument & with return type
6) Write a function expression that returns the cube of 7.

d) With argument & with return type
8) Write a function expression to return the area of a rectangle.
10) Write a function expression to return whether a number is prime.

*/
// 1. Write a function expression that prints "JS Rocks".
// var printdata = function(){
//     console.log("JS Rocks");
// }
// printdata();

// 3) Write a function expression to print the reverse of a string.
// var printdata = function(str){
//     var revstr = "";
//     for (let i = str.length-1; i >=0; i--) {
//         revstr+=str[i];
//     }
//     console.log(revstr);
// }
// printdata("Raj");
// var printdata = function(str){
//     console.log(str.split('').reverse().join(''));
// }
// printdata("Raj");

// 5) Write a function expression to return the current year.
// var getdate =function (){
//     return new Date().getFullYear();
// }
// console.log(getdate());

// 7) Write a function expression to return the maximum of two numbers.
// var printdata = function(n1,n2){
//     if(n1<n2)
//         return n2;
//     return n1;
// }
// console.log(printdata(-120,13));


// 9) Write a function expression that returns the nth Fibonacci number.

var Fibonacci = function (n){
    var a = 0;
    var b = 1;
    var c = 0;
    var counter = 1;
    while (1) {
        counter++;
        c = a+b;
        a = b;
        b = c;
        if(counter==n)
            break;
    }
    return a;
}
// console.log(Fibonacci(10));

// 0 1 1 2 3 5 8 13 21 34 55
/*

# **3. Arrow Functions (10 Questions)**

a) Without argument & without return type

1. Write an arrow function to print “Welcome to Arrow Functions”.
2. Write an arrow function to print numbers from 10 to 1.

b) With argument & without return type
3) Write an arrow function that prints a string given as input.
4) Write an arrow function that prints the cube of a number.

c) Without argument & with return type
5) Write an arrow function that returns a random number.
6) Write an arrow function that returns today’s weekday name.

d) With argument & with return type
7) Write an arrow function that returns the sum of two numbers.
8) Write an arrow function to return the reverse of a number.
9) Write an arrow function that checks if a number is palindrome.
10) Write an arrow function that returns the average of numbers in an array.

*/