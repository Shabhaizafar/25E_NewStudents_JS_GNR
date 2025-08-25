/*
2. In a movie app, write an arrow function that takes an array of movie objects (name, rating) and returns the names of movies with a rating above 8, all in uppercase letters.
4. For a school system, write an arrow function that takes an array of student objects (name, marks) and returns an array of objects where each student also has a grade property (`A`, `B`, `C`).
6. You are building a chat app. Write an arrow function that takes an array of message objects (sender, text) and returns only the messages where the text contains a keyword (e.g., "urgent").
8. You are developing a music app. Write an arrow function that takes an array of song objects (title, artist) and returns an array of unique artist names.
10. You are building a flight booking system. Write an arrow function that takes an array of flight objects (flightNo, source, destination) and returns an object where the keys are destinations and the values are arrays of flight numbers going there.
*/
// 1. You are making a library system. Write an arrow function that takes an array of book objects (title, author, year) and returns only the titles published after 2015.

// var arr = [
//     { title : "Geo Politices" , author : "Jayveersinh" , year : 2012},
//     { title : "Rich Dad,Poor Dad" , author : "Aryan1" , year : 2015},
//     { title : "E=mc2" , author : "Aryan2" , year : 2016},
//     { title : "Outlander" , author : "Dev" , year : 2017},
//     { title : "JEE" , author : "Rudra" , year : 2017}
// ];
// var library_system = (arr,year) => {
//     console.log("library system");
//     var books = [];
//     for (const element of arr) {
//             if(element["year"]>year){
//                 books.push(element['title']);
//             }
//     }

//     if(books.length)
//         return books;
//     return "Book Doesn't Exist";
// }
// console.log(library_system(arr,2025));

// 3. You are building a contact list app. Write an arrow function that takes an array of contact objects (name, phone) and returns an array of formatted strings like: `"Name: John, Phone: 12345"`.

// var arr = [
//     { Name : "Jayveersinh" , PhoneNo : "1234567890" },
//     { Name : "Aryan1" , PhoneNo : "1234890567" },
//     { Name : "Aryan2" , PhoneNo : "4567890123" },
//     { Name : "Dev" , PhoneNo : "5671234890" },
//     { Name : "Rudra" , PhoneNo : "8901234567" }
// ];
// var contact_list_app = (arr)=>{
//     var temp = [];
//     for (const element of arr) {
//         temp.push(`Name : ${element["Name"]}, Phone : ${element["PhoneNo"]}`);
//     }

//     return temp;
// }
// console.log(contact_list_app(arr));

// 5. In a shopping cart app, write an arrow function that takes an array of items (name, price, quantity) and returns a string listing all items with their total price (`price × quantity`).

// var arr = [
//     { name : "Soap", price : 80, quantity : 2},
//     { name : "Lunchbox", price : 200, quantity : 5},
//     { name : "chocolate", price : 30, quantity : 6},
//     { name : "Candy", price : 10, quantity : 3}
// ];
// var shopping_cart_app = (arr)=>{
//     var mystr = ``;
//     for (const element of arr) {
//         mystr+= `${element['name']} : ${element['price']*element["quantity"]}\n`;
//     }
//     return mystr;
// }

// console.log(shopping_cart_app(arr));

// 7. For a restaurant app, write an arrow function that takes an array of menu items (name, category) and groups them into an object with categories as keys and arrays of item names as values.

// var arr = [
//     { "Paneer-Masala": "Sabji" },
//     { "Moctail": "Drink" },
//     { "Cheese-Paneer": "Sabji" }
// ];
// var restaurant_app = (arr) => {
//     var temp = {};

//     for (const key in arr) {
//         for (const key2 in arr[key]) {
//             temp[arr[key][key2]] = [];
//         }
//     }

//     for (const key in temp) {
//         for (const key2 in arr) {
//             for (const key3 in arr[key2]) {
//                 if(key == arr[key2][key3])
//                     temp[key].push(key3);
//             }
//         }
//     }
//     console.log(temp);
// }



// restaurant_app(arr);


// 9. In an employee management system, write an arrow function that takes an array of employee objects (name, role, salary) and returns the names of employees whose role is "Manager" in a single string separated by commas.

var employees = [
    { fname : "Ajay", role : "Manager", salary : 30000},
    { fname : "Rajesh", role : "Developer", salary : 25000},
    { fname : "Vijay", role : "Developer", salary : 50000},
    { fname : "Raj", role : "Manager", salary : 40000}
];
var employee_management_system = (emp,role) =>{
    var temp = "";
    for (const element of emp) {
        if(element.role == role){
            temp+=element.fname;
            temp+=',';
            }
    }
    return temp.slice(0,temp.length-1);
}

console.log(employee_management_system(employees,"HR"));






