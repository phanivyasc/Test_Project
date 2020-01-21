//Program to find largest number in an array
var a=[21,46,22,48,488,550,1926]
var largest=0;
a.forEach(function(val,ind){
    if(val>largest){
        largest=val; 
    }
})
console.log(largest)