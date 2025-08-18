/*
Syntax : 
1.Initialization + declaration 
    function functioname(){
        // code;
    }
2.Functon Calling/invoked 
    functioname();
*/


//  1. Name Function 
    // a. without argument and without return type
    /*
        function sayHello(){
            console.log("Hello Everyone Welcome JS !");
        }
        sayHello();
        sayHello();
    */

    // b. with argument and without return type
    /*
        function addition(a,b){   // a , b   Perameters
            console.log("Addition : ",a+b);
        }
        addition(12,13);    //12 , 13  Arguments
        addition(1,2);
    */
    // c. without argument and with return type
        /*
            function valueofPi(){
                return 3.14;
            }
            // i. store and use 
            var pi = valueofPi();
            console.log(pi);

            // ii.direct use
            console.log(valueofPi());
        */
    // d. with argument and with return type
    /*
        function result(marks){
            if(marks>33)
                return "Pass";
            return "Fail";
        }
        var output = result(50);
        console.log(output);
        console.log(result(22));
    */

// var i = 12
// if(i<10) console.log(1);
//     console.log(2);