//Program to find second largest number in an array
var a=[92,96,42,23,2,202,203,496,523,1,400,502,8787,996]
for(var j=0;j<=a.length;j++){
for(var i=0;i<=a.length;i++){
    var c=a[i]
    var d=a[i+1]
    if(c<d){
        a[i+1]=c
        a[i]=d
    }
}
}
console.log(a[1])