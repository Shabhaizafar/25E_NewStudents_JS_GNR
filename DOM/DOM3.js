// How to access Attributes : 

console.log("How TO Access Attributes !!!");

// console.log(document.getElementsByTagName('a')[0].attributes);
// console.log(document.getElementsByTagName('a')[0].attributes.href);
// console.log(document.getElementsByTagName('a')[0].attributes["href"]);
console.log(document.getElementsByTagName('img')[0].attributes);
console.log(document.getElementsByTagName('img')[0].attributes[0]);

console.log(document.getElementsByTagName('img')[0].attributes['src']);

console.log(document.getElementsByTagName('img')[0].attributes.src);


// How to access Attributes Value : 
console.log("How TO Access Attributes Value !!!");
// console.log(document.getElementsByTagName('a')[0].attributes["href"].value);

console.log(document.getElementsByTagName('img')[0].attributes.src.value);


// How to Modify Attributes Value : 

document.getElementsByTagName('img')[0].attributes.src.value = "https://imgs.search.brave.com/9cgEGRQztu5wvTCv5fxc_1mfcYPMj6Toon9649hjXRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA5LzE0/LzE4LzA5MTQxODkz/ZmFlYzIwMjkzZTU2/ZmZlNjc0MWEzZTI1/LmpwZw";
