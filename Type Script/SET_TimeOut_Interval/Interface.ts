interface Marks{
    m1:number;
    m2:number;
    m3:number;
}

class Student implements Marks{
    m1=95;
    m2=80;
    m3=85;
    getMarks(){
        console.log(this.m1+this.m2+this.m3)
    }
    
}

class Student1 implements Marks{
    m1=60;
    m2=87;
    m3=77;
    Mul(){
        console.log(this.m1*this.m2*this.m3)
    }
}

var obj1 = new Student1()
obj1.Mul()
