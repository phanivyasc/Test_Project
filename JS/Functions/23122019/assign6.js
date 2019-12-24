//Program to find factorial of given number

function facto(a){

    var out = a;
    for(var i=a-1;i>0;i--){
        out = out*i;
    }

    console.log("the factorial of",a,"is",out);
}

facto(6);