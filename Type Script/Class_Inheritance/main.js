"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//import {Student} from "/Users/phani/Desktop/git/Test_Project/Type Script/Class_Inheritance/student"
var student_1 = require("../Class_Inheritance/student");
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(/*public std1:Student*/ id, name, grade, schoolName) {
        var _this = _super.call(this, id, name, grade) || this;
        _this.schoolName = schoolName;
        return _this;
    }
    School.prototype.getDetails = function () {
        console.log(this.name, this.id, this.schoolName);
    };
    return School;
}(student_1.Student));
//var VBM=new School(new Student(101,"sai","A"))
//console.log(VBM.std1.name)
var VBM = new School(102, "ram", "B", "Jai Tech");
var VBM1 = new School(1500, "jai", "A", "Jai Tech");
VBM.getDetails();
VBM1.getDetails();
