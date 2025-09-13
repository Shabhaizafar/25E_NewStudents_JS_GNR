// How To Access Any HTML Element : 

// console.log(document.getElementById('id1'));

// console.log(document.getElementsByClassName('heading2')[0]);

// console.log(document.getElementsByTagName('h2')[0]);



// How to Modify HTML Content using JS : 

// 1) using innerHTML
// document.getElementById('id1').innerHTML = "Changed Code1";
// 2) using innerText 
// document.getElementById('id1').innerText = "Changed Code2";
// 3) using textContent
// document.getElementById('id1').textContent = "Changed Code3";

// document.getElementsByClassName('heading2')[0].innerHTML = "CPP";




// How to Modify/Add CSS using JS:
document.getElementsByTagName('h2')[0].style.backgroundColor = "red";
document.getElementsByClassName('heading2')[0].style.color = "blue";
document.getElementById('id1').style.fontSize = "100px";

