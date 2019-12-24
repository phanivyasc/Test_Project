//Program to check whether the given number is even or odd

function check(a)
{
    if(a%2 == 0){
        return ("Even");
    }
    if(a%2 ==1){
        return ("Odd");
    }
}

var out = check(503); //input the number to be checked

console.log("The given number is",out);