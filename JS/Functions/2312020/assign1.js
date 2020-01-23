var Student=function(ID,FirstName,LastName,M1,M2,M3){
    this.ID=ID;
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.M1=M1;
    this.M2=M2;
    this.M3=M3;
    this.getTotal=function(){
        return (this.M1+this.M2+this.M3)
    }
    this.fullName=function(){
        return this.FirstName+this.LastName
    }
    this.Grade=function(){
        var c=this.getTotal()
        if(c >= 80){
            console.log("A Grade")
        }
        if(c<80 && c>=70){
            console.log("B Grade")
        }
        if(c<70 && c>=60){
            console.log("C Grade")
        }
        if(c<60 && c>=35){
            console.log("D Grade")
        }
        if(c<35){
            console.log("F Grade")
        } 
    }
}

var std1=new Student(101,"Sai","Ram",5,0,15)
var std2=new Student(102,"Pranay","Sanju",95,90,85)
var std3=new Student(103,"Dora","Babu",4,65,5)
var std4=new Student(104,"Siva","Shankar",47,10,5)
var std5=new Student(105,"Phani","Vyas",45,60,1)

console.log(std5.Grade())