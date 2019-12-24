var emp = {
    "ID": 1001,
    "Name": "Phani",
    "Dept": "QA",
    "Grade": "A",
    "Salary": 0,
    "Position": function (b) {
        if (b >= 50000) {
            emp.Salary = b;
            return ("Manager")
        }

        if (b < 50000 && b > 20000) {
            emp.Salary = b;
            return ("Team Lead");
        }

        if (b < 20000) {
            emp.Salary = b;
            return ("Engineer")
        }
    }
}

console.log(emp.Position(25000));
console.log(emp.Salary);