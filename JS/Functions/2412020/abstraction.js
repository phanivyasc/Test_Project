//JS-OOPS Abstraction Example

var TSSPDCL = function (ServiceNo, UId, Units) {
    this.ServiceNo = ServiceNo;
    this.UId = UId;
    this.Units = Units;
    var pricePerUnit = 5;
    var surcharge = 30;

    var calculateBill = function () { 
        var bill = (Units * pricePerUnit) + surcharge;
        console.log("Generated bill amount for UID-"+UId+" is Rs."+ bill)
    }

    this.showBill = function () {
       calculateBill()
    }
}

var Sai = new TSSPDCL(10010, 200155, 90)
var Ram = new TSSPDCL(10015, 200287, 150)
var Raj = new TSSPDCL(10018, 200392, 50)

Sai.showBill()
Ram.showBill()
Raj.showBill()

console.log(Sai.Units)
console.log(Sai.UId)
console.log(Sai.surcharge)