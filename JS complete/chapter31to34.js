// var dat = new Date();
// document.write(""+dat);

// var monthsName = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// alert(""+monthsName[dat.getMonth()]);

// var dayName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var a = dayName[dat.getDay()];
// document.write("today is "+a.slice(0,3));

// if(dayName === "sunday" || dayName === "saturday"){
//     alert("its funday ");
// }
// else{
//     alert("its not funday ");
// }

// if(dat.getDate()<=15){
//     alert("first fiftheen days of the month");
// }
// else{
//     alert("last days of the month");
// }

// var datObj = new Date("jan 1,1970");
// var mili = datObj.getTime();
// document.write("<br />Elapsed miliseconds since jan 1,1970 :"+mili);
// var mint = mili / (60*60);
// document.write("<br />Elapsed miniutes since jan 1,1970 :"+mint);

// if(dat.getHours<=11){
//     alert("its AM");
// }
// else{
//     alert("its PM");
// }

// var dAt = new Date("dec 31,2020");
// var laterDate = dAt;
// document.write("later date :"+laterDate);

// var ramDat = new Date("June 18,2015");
// var Milidays = ramDat.getTime();
// var days = (Milidays/(7*24*60*60*1000));
// document.write(""+Math.floor(days)+" have passed since 1st ramadan 2015");

// var RefDat = new Date("dec 5,2015");
// document.write("on Reference date : "+RefDat);
// var MiliSecond = RefDat.getTime();
// var sec = (MiliSecond/(60*1000));
// document.write("<br />"+Math.floor(sec)+" had passed since the beginning of 2015");

// console.log("Current date :"+dat);   \\that's for hours reset 
// dat.setHours(dat.getHours()-1);
// console.log(dat);

// dat.setFullYear(dat.getFullYear()-100);      \\that's for years reset
// alert(dat);

// var age = +prompt("enter your birth year");
// var agecalc = dat.getFullYear()-age;
// document.write("your age is :"+agecalc);

// document.write("<h1>K-Electric Bill</h1>");
// var cusName = prompt("enter Customer name");
// var currMonth = prompt("enter current month");
// var units = prompt("enter number of units ");
// var charges = prompt("enter charges per unit");
// document.write("Customer Name : "+cusName);
// document.write("<br />Current Month : "+currMonth);
// document.write("<br />Number of units : "+units);
// document.write("<br />Charges per unit : "+charges);
// var net = units*charges;
// document.write("<br /><br />Net Amount Payable(Within due date) : "+net);
// document.write("<br />Late Payment Surcharges : 350");
// document.write("<br />Gross Amount Payable(after due date) : "+(net+350));