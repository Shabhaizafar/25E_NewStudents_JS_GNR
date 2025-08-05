// Primitive : 
// Number,String ,Boolean

// Reference : 
// Object {object,array},function 



// Primitive : 
// var n1 = 12;
// var n2 = n1;
// console.log("Value of N1 : ",n1); //12
// console.log("Value of N2 : ",n2); //12
// n1++;
// console.log("Value of N1 : ",n1); //13
// console.log("Value of N2 : ",n2); //12


// // Refference : 
// var arr1 = [11,12,13];
// var arr2 = arr1;
// console.log("Value of Arr1: ",arr1); // [11,12,13]
// console.log("Value of Arr2: ",arr2); // [11,12,13]
// arr1.push(1000);
// console.log("Value of Arr1: ",arr1); // [11,12,13,1000]
// console.log("Value of Arr2: ",arr2); // [11,12,13,1000]




var arr = [11,12,13];
console.log(arr);
// 1. Push :  add a New Element at last index
// return : new Size of Array

// single Value 
// var ans = arr.push(100);
// Multiple Value : 
// var ans =arr.push(100,"Royal");
// console.log(arr);
// console.log(ans);


// 2. Pop :  remove Element at last index    at a time single Value Remove
// return : removed Element Value
// var ans = arr.pop();
// console.log(arr);
// console.log(ans);


// 3. UnShift :add a New Element at starting index
// return : new Size of Array

// single Value 
// arr.unshift(100);

// Multiple Value 
// var ans = arr.unshift(100,300,500);
// console.log(ans);



// 4. Shift :  remove Element at 0 index    at a time single Value Remove
// return : removed Element Value
// arr.shift();
// console.log(arr);








