//Print sum of odd numbers

function odd(a){

    var sum =0;

    for(var i=0;i<=a;i++){
        if(i%2 == 1){
            sum = sum+i;
        }
    }

    console.log("sum of all odd numbers is",sum);
    
}

odd(18);

