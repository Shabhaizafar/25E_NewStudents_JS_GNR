/*
Logical  : 
&& , || , !

Relational  : 
>,<,>=,<=,==,!=     ===,!==

Assignment Op : 
=,+=,-=,*=,/=,%=   same as C Language

Ternary :
(condition) ? code1 : code2;


typeof 
*/

// console.log(12<13 && 10>9); //true
// console.log(14<13 && 10>9); //false
// console.log(12<13 && 10>12); //false

// console.log(12 && 13); //13
// console.log(12 && 0); //0

// console.log("Raj" && "Zafar");
// console.log("" && "Zafar");


// console.log(12<13 || 10>9);  // true
// console.log(14<13 || 10>9);   // true
// console.log(12<13 || 10>12);   // true


// console.log(12 || 13);//12
// console.log(12 || 0); //12

// console.log("Raj" || "Zafar"); //Raj
// console.log("" || "Zafar");  //Zafar







// console.log(12==12);// true
// console.log(12=="12");// true

// console.log(12==="12");  // false

// console.log(12!=13);
// console.log(12!="12");

// console.log(12!=="12");


// typeof : 
console.log(12,typeof(12));
console.log(12.4,typeof(12.4));

console.log("Raj",typeof("Raj"));
console.log('a',typeof('a'));
console.log("&",typeof("&"));

console.log([12,13],typeof([12,13]));


console.log(false,typeof(false));

console.log(undefined,typeof(undefined));

console.log(typeof(prompt));

console.log(12n,typeof(12n));

console.log(12345678901234567890);
console.log(12345678901234567890n);


console.log(null,typeof(null));


