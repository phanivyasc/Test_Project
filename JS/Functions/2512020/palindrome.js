//Program to verify the given number is a Palindrome number or not
function palindrome(x){
//var n = x;
var sum = 0;
var b=x;
while(b){
    var a = b%10;
    b = parseInt(b/10);
    sum = (sum*10)+a;
}
if(x==sum){
    console.log("Given number is a Palindrome number")
}
else{
    console.log("Given number is not a Palindrome number")
}
}
palindrome(887)