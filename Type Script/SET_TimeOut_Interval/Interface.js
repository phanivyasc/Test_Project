var Student = /** @class */ (function () {
    function Student() {
        this.m1 = 95;
        this.m2 = 80;
        this.m3 = 85;
    }
    Student.prototype.getMarks = function () {
        console.log(this.m1 + this.m2 + this.m3);
    };
    return Student;
}());
var Student1 = /** @class */ (function () {
    function Student1() {
        this.m1 = 60;
        this.m2 = 87;
        this.m3 = 77;
    }
    Student1.prototype.Mul = function () {
        console.log(this.m1 * this.m2 * this.m3);
    };
    return Student1;
}());
var obj1 = new Student1();
obj1.Mul();
