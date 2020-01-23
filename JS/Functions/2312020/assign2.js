//Fibbonacci series
var n=100; //for length of the series
var p1=0;
var p2=1;
var p3=0; 
for(var i=1;i<=n;i++){
    p3=p1+p2
    p2=p1
    p1=p3
    console.log(p3)
}