//Program to verify Inheretance 
var Person = function(name,age,phone,dob,city,country){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.dob = dob;
    this.city = city;
    this.country = country;
    this.print = function(){
        console.log(this.name,this.age)
    }
}

var Employee = function(id,dept,designation,salary){
    this.id = id;
    this.dept = dept;
    this.designation = designation;
    this.salary = salary;
}

var emp1 = new Employee(1001,"Quality","Engineer",20000);
var emp1__proto__ = new Person("Sai",25,9849444555,15081990,"Hyderabad","India");

var emp2 = new Employee(1005,"Dev","Sr.Engineer",45000);
var emp2__proto__ = new Person("Rob",35,"Male",8794589745,22081985,"Bangalore","India");

console.log(emp1.dept);
console.log(emp1__proto__.phone);

console.log(emp2__proto__.city);
console.log(emp2.salary);
emp2__proto__.print();