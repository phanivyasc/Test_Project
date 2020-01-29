var Person = function(fName,lName,age,add,city,state,country,phone,email){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.add = add;
    this.city = city;
    this.state = state;
    this.country = country;
    this.phone = phone;
    this.email = email;
    this.getFullName = function(x){
        return this.fName+this.lName+x
    }
    this.getEmail = function(){
        return this.email
    }
    this.getAdd = function(){
        return this.add
    }
}

var per1 = new Person("Sai1","Ram1",30,"SR Nagar","Hyd","TS","Ind",9849444591,"sairam1@yahoo.com")
var per2 = new Person("Sai2","Ram2",31,"Ameerpet","Hyd","TS","Ind",9849444592,"sairam2@yahoo.com")
var per3 = new Person("Sai3","Ram3",32,"Koti","Hyd","TS","Ind",9849444593,"sairam3@yahoo.com")
var per4 = new Person("Sai4","Ram4",33,"DSNR","Hyd","TS","Ind",9849444594,"sairam4@yahoo.com")
var per5 = new Person("Sai5","Ram5",33,"KPHB","Hyd","TS","Ind",9849444595,"sairam5@yahoo.com")

var a = per1.getFullName.call(per1,"hello")
console.log(a)