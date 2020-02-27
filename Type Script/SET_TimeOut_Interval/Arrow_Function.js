var Student = /** @class */ (function () {
    function Student(id, name) {
        //this.id=id;
        //this.name=name;
        this.id = id;
        this.name = name;
    }
    Student.prototype.getName = function () {
        var _this = this;
        console.log(this.name);
        var getId = function (a, b) {
            console.log(_this.id);
            return a + b;
        };
        console.log(getId(10, 50));
    };
    return Student;
}());
var obj1 = new Student(101, "dora");
setInterval(function () {
    obj1.getName();
}, 5000);
