//import {Student} from "/Users/phani/Desktop/git/Test_Project/Type Script/Class_Inheritance/student"
import {Student} from "../Class_Inheritance/student"


class School extends Student{
    schoolName;
    constructor(/*public std1:Student*/id:number,name:string,grade:string,schoolName:string){
        super(id,name,grade)
        this.schoolName=schoolName
    }
    getDetails(){
        console.log(this.name,this.id,this.schoolName)
    }

}

//var VBM=new School(new Student(101,"sai","A"))
//console.log(VBM.std1.name)

var VBM=new School(102,"ram","B","Jai Tech")
var VBM1=new School(1500,"jai","A","Jai Tech")
VBM.getDetails()
VBM1.getDetails()