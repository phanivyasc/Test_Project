class Student{
    
        constructor(public id:number, public name:string){
        //this.id=id;
        //this.name=name;
        
    }
    getName(){

        console.log(this.name)
        var getId = (a,b)=>{
            console.log(this.id)
            return a+b;
        }
       console.log(getId(10,50) )
    
    }
}

var obj1=new Student(101,"dora")
setInterval(function(){
    obj1.getName()
},5000)
