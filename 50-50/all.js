// ### **Array Methods**

// 2. A queue system stores customers `["Amit", "Sneha", "Ravi"]`. Remove the **first customer** who got the service.
// 4. You have a list of exam scores `[78, 90, 56, 99, 85]`. Sort them in **ascending order**.
// 6. You have student names `["Ravi", "Anu", "Rohit"]`. Print each student’s name with "Present" using an array method.
// 8. A word list `["apple", "banana", "cherry"]` should be reversed (last becomes first).
// 10. A school attendance record `[85, 92, 47, 76, 66]`. Check if **at least one student** scored below 50.

// //////////////////////////////////////

// 1. A shopping cart contains items `["apple", "banana"]`. Add a new item `"orange"` at the end using an array method.

// var shopping_cart = ["apple", "banana"];

// while (1) {
//     var product=  prompt("Enter New Item :");
//     //cancel : null   typecasting  boolean : false 
//     //ok : ""         typecasting boolean : false
//     // ok : "data"    typecasting boolean : true
//     if (Boolean(product) == false) {
//         break;
//     }
//     shopping_cart.push(product);
// }
// console.log(shopping_cart);


// 3. A playlist contains songs `["Song1", "Song2", "Song3"]`. Add a new song at the **beginning** of the playlist.

// var playlist = ["Song1", "Song2", "Song3"];

// while (1) {
//     var product=  prompt("Enter New Song :");
//     if (Boolean(product) == false) {
//         break;
//     }
//     playlist.unshift(product);
// }
// console.log(playlist);

// 5. A list of numbers `[2, 4, 6, 8]` needs to be doubled. Use an array method to create a new array of doubled values.
// var arr = [2, 4, 6, 8];
// console.log(arr);

// var new_arr = arr.map((value)=>{
//     return value*2;
// });
// console.log(new_arr);


// 7. A company has employees `["HR", "Admin", "Manager", "Intern"]`. Create a new array excluding `"Intern"`.
// var arr = ["HR", "Admin", "Manager", "Intern"];

// var new_arr = arr.filter((value)=>{
//     return value!="Intern";
// });
// console.log(new_arr);

// 9. Create a 5-seat theater booking system where all seats are initially empty (`"Empty"`). Use one array method to fill all seats with `"Empty"`.

// var arr= [1,2,3,4,5];

// arr.fill("Empty");
// console.log(arr);


// ### **Functions**

// 12. A food delivery app needs a quick price calculation. Write an **arrow function** that multiplies `price * quantity`.
// 14. Immediately print `"Welcome to Zafinity Learning!"` using an **IIFE function**.
// 16. A restaurant app needs to process orders. Write a **callback function** that takes `prepareOrder` and executes `serveOrder` after it.

// //////////////////////////////////////
// 11. Write a **named function** to calculate the area of a rectangle given width and height.
// function area(width,height){
//    console.log(width*height);
// };
// area(12,10);



// 13. Create a **function expression** that returns the square of a number.

// var square = function (n){
//     return n*n;
// }
// console.log(square(12)); //144


// 15. Create a **generator function** that generates seat numbers from 1 to 5 in a cinema hall.

// function * generator(){
//     yield 1,
//     yield 2,
//     yield 3,
//     yield 4,
//     yield 5
// }
// const output = generator();

// console.log("Seat No : ",output.next().value);
// console.log("Seat No : ",output.next().value);
// console.log("Seat No : ",output.next().value);
// console.log("Seat No : ",output.next().value);
// console.log("Seat No : ",output.next().value);
// console.log("Seat No : ",output.next().value);



// 17. Write a **recursive function** to calculate the factorial of a number (e.g., 5 → 120).
// 5 > 1 

// function factorial(n,fact=1){
//     if(n==1){
//         console.log(fact);
//         return ;
//     }
//     fact*=n;
//     factorial(n-1,fact);
// }
// factorial(5);



// ### **String Methods**

// 18. A user enters `"   Hello World!   "`. Remove extra spaces from both sides.
// 20. A message `"javascript is fun"` should be converted into `"JAVASCRIPT IS FUN"` for display on a banner.

// 19. A banking system shows account numbers. Hide all digits except the last 4 (e.g., `"1234567890"` → `"******7890"`).


// var accountno = prompt("Enter Number");
// console.log(accountno.slice(0,accountno.length-4).split('').fill("*").join('').concat(accountno.slice(accountno.length-4)));

