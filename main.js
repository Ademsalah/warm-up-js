var carName = Volvo ;
var length = 16; //number

var lastName = "Johnson"; //string 

var isGreaterThan10 = length > 10 //string,num


function square1(x) { 
    return x * x ; 
    } 
   
    function square2 (x){ 
    return x * x ; 
    }

    function square3(x)  { 
        return x * x;
        }
        function largest(x,y) {
            if(x>y){ return x} 
            {return y}
        }
function add(num1,num2){
    return num1+num2
}
function subtract(num1,num2){
    return num2-num1
}

function calc(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);}  { return subtract(num1, num2); }
}
console.log(calc('+', 5, 3));
console.log(calc('-', 5, 3));


function divide(num1,num2){
    return num2/num1
}

function multiply(num1,num2){
    return num2*num1
}