var students = [{"ID":101,
                "Name":"Sai",
                "Marks":{"m1":80,"m2":75,"m3":90,"m4":70,"m5":88,"m6":95},
                "Total":0,
                },
                {"ID":102,
                "Name":"Jai",
                "Marks":{"m1":70,"m2":65,"m3":80,"m4":90,"m5":87,"m6":98},
                "Total":0,
                },
                {"ID":103,
                "Name":"Ravi",
                "Marks":{"m1":45,"m2":60,"m3":74,"m4":89,"m5":86,"m6":82},
                "Total":0,
                },
                {"ID":104,
                "Name":"Surya",
                "Marks":{"m1":50,"m2":70,"m3":64,"m4":59,"m5":66,"m6":78},
                "Total":0,
                },
                {"ID":105,
                "Name":"Ram",
                "Marks":{"m1":85,"m2":71,"m3":68,"m4":92,"m5":99,"m6":98},
                "Total":0,
                },
                {"ID":105,
                "Name":"Phani",
                "Marks":{"m1":86,"m2":78,"m3":96,"m4":90,"m5":95,"m6":91},
                "Total":0,
                },
            ];
//var GrandTotal=0;
//students.forEach(function(val,index){
//             val.Total = val.Marks.m1+val.Marks.m2+val.Marks.m3+val.Marks.m4+val.Marks.m5+val.Marks.m6;
//            GrandTotal = GrandTotal + val.Total;
// });

function out(name) { //function for returning total based on name passed as an argument

    var out1 = students.filter(function (val, index) {
        return (val.Name == name);
    })

    out1[0].Total = out1[0].Marks.m1+out1[0].Marks.m2+out1[0].Marks.m3+out1[0].Marks.m4+out1[0].Marks.m5+out1[0].Marks.m6;
    console.log("Student Name:",out1[0].Name,"Total:",out1[0].Total);
    
};

function totalout(){ //function for returning total of all students
    students.forEach(function(val,index){
        console.log("Name:"+val.Name,"Marks:",val.Marks.m1+val.Marks.m2+val.Marks.m3+val.Marks.m4+val.Marks.m5+val.Marks.m6);
    })
}

out("Phani"); //to get total based on student name
totalout(); //gives total of all students