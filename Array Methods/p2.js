const arr = [10,39,56,45,78];

// 1. foreach
// console.log("Foreach : ");
// arr.forEach((value,index,selfarr)=>{
//     console.log(value,index,selfarr);
// });


// // 2. map
// console.log("map : ");
// arr.map((value,index,selfarr)=>{
//     console.log(value,index,selfarr);
// });

// // 3. filter
// console.log("Filter : ");
// arr.filter((value,index,selfarr)=>{
//     console.log(value,index,selfarr);
// });




// 1. foreach
// console.log("Foreach : ");
// var ans1 =  arr.forEach((value,index,selfarr)=>{
//     if(value>25){
//         return value;
//     }
// });
// console.log(ans1);

// // 2. map
// console.log("map : ");
// var ans2 = arr.map((value,index,selfarr)=>{
//     if(value>25){
//         return value;
//     }
// });
// console.log(ans2);

// // 3. filter
// console.log("Filter : ");
// var ans3 = arr.filter((value,index,selfarr)=>{
//     if(value>25){
//         return value;
//     }
// });
// console.log(ans3);




// 2. map
// console.log("map : ");
// var ans2 = arr.map((value,index,selfarr)=>{
//     return value>25;
// });
// console.log(ans2);

// // 3. filter
// console.log("Filter : ");
// var ans3 = arr.filter((value,index,selfarr)=>{
//     return value>25;
// });
// console.log(ans3);




/*

1. map()

1. Given an array of `[10, 20, 30, 40]`, use `map()` to increase each value by 10.
2. Given `["apple", "banana", "grapes"]`, use `map()` to return the length of each fruit name.

//---------------------------------------------------------------//

2. filter()

1. Given `[12, 45, 7, 64, 23]`, use `filter()` to return only numbers greater than 20.
2. From `["car", "bus", "train", "cycle"]`, use `filter()` to return words with more than 3 letters.

//---------------------------------------------------------------//

3. forEach()

1. Print each element of `[2, 4, 6, 8]` using `forEach()`.
2. Given `["JS", "Python", "C++"]`, use `forEach()` to print `"I love <language>"` for each item.

//---------------------------------------------------------------//

4. fill()

1. Create an array of 5 elements and fill it with `"Hello"`.
2. Create an array `[1, 2, 3, 4, 5]` and replace the last 3 elements with `0` using `fill()`.

//---------------------------------------------------------------//

5. some()

1. Given `[5, 12, 8, 130, 44]`, use `some()` to check if any number is greater than 100.
2. Given `["cat", "dog", "elephant"]`, check if at least one word has more than 5 letters.

//---------------------------------------------------------------//

6. every()

1. Given `[10, 20, 30, 40]`, check if every number is divisible by 10.
2. Given `["js", "java", "json"]`, check if every word starts with `"j"`.

//---------------------------------------------------------------//

7. sort()

1. Sort `[23, 1, 56, 3, 78]` in ascending order.
2. Sort `["banana", "apple", "cherry"]` alphabetically.

//---------------------------------------------------------------//

8. reverse()

1. Reverse `[1, 2, 3, 4, 5]`.
2. Reverse the characters in `"JavaScript"`.


*/