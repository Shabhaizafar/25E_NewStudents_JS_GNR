// Higher-Order Function
function main(){
    var choice = prompt('1. type "num" for Number.\n2. type "str" for String.\n\nEnter Your Choice : ');

    switch (choice) {
        case "num": NumberOp();
            break;
        case "str" :  StringOp();
            break;
        default:  console.log("Wrong");
            break;
    }
}

main();



function NumberOp(){
    var n1 = +prompt('Enter the Value 1 :');
    var n2 = +prompt('Enter the Value 2 :');
    var choice = prompt('1. type "+" for Addition.\n2. type "-" for Subtraction.\n\nEnter Your Choice : ');

    switch (choice) {
        case "+": addition(n1,n2);
            break;
        case "-":
            break;
            // mul div mod
        default: console.log("Wrong Choice !!");
            break;
    }
}

function addition(a,b){
    console.log("Addition is: ",a+b);
}

function subtraction(a,b){

}
// ------------------------------------
function StringOp(){
    var str1 = prompt('Enter the Value str1 :');
    var str2 = prompt('Enter the Value str2 :');
    var choice = prompt('1. type "concat" for Concatination.\n2. type "upper" for Upper.\n\nEnter Your Choice : ');

    switch (choice) {
        case 'concat':
            break;
        case 'upper' : strupr(str1,str2);
            break;
        // lower , find the length  ,swap case 
        default:
            break;
    }
}


function strupr(s1,s2){
    console.log(s1.concat(" ",s2).toUpperCase());
}