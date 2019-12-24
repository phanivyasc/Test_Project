//Print sum of even numbers

function even(a){

    var sum =0;

    for(var i=0;i<=a;i++){
        if(i%2 == 0){
            sum = sum+i;
        }
    }

    console.log("sum of all even numbers is",sum);
    
}

even(18);

