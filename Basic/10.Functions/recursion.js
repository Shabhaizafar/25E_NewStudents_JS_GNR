// recursion : 
// function called it's self that is called recursion Function.


// recursion fu vs infinite loop 


// function sayHello(){
//     console.log("Hello");
//     sayHello();
// }

// sayHello();

//  1 + 2/2! + 3/3! + ....+ n/n!;

/*
n = 3

= 1 + 1 + 0.5
= 2.5
*/


// function series(n){
//     var fact = 1;
//     for (let i = 1; i <=n; i++) {
//         fact*=i;
//     }
//     console.log(fact);
//     if(n==1){
//         console.log("recursion Stop");
//         return;
//     }
//     series(n-1);
// }

// series(5);


var n = 20;
var fact = 1;
sum = 0;

function series(a,fact){
    fact*=a;
    sum+=(a/fact);
    console.log(a,fact);
    a++;
    if(a>n){
        console.log("Final Ans : ",sum);
        return;
    }
    series(a,fact);
}

series(1,fact);



//  1 - 2^2/2! + 3^3/3! - ....+ n^n/n!;

/*
n = 3 

= 1 - 2 + 4.5
= 3.5
*/
