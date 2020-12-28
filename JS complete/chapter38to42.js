// function pow(a,b){
//     return Math.pow(a,b);
// }
// console.log(pow(2,3));

// function leapYear(){
//     if(year %4==0){
//         return "this is leap year";
//     }
//     else{
//         return "this isn't leap year";
//     }
// }
// var year = +prompt("enter a year to check this year is leap year or not");
// console.log(leapYear(year));

// function AreaOfTriangle(a,b,c,aa,bb,cc){
//     var area = (S(a,b,c) *(( S(a,b,c) - aa )*( S(a,b,c) - bb )*( S(a,b,c) - cc )));
//     return area;
// }
// function S(x,y,z){
//     return (x+y+z)/2;
// }
// console.log(AreaOfTriangle(4,4,4,3,3,3));

// function mainFun(){
//         console.log(percent(70,81,78));
//         console.log(avg(70,81,78));
// }
// function percent(S1,S2,S3){
//     var res = (S1+S2+S3)/300 * 100;
//     return res;
// }
// function avg(S1,S2,S3){
//     return (S1+S2+S3)/3;
// }

// mainFun();

// function index(){
//      str = "hello world"
//     return str.indexOf("w");
// }
// console.log(index());

// function delVol(){
//     var str = prompt("enter a character");
//     var rep = str.replace(/[aeiou]/g,'');
//     return rep;
// }
// console.log(delVol());

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var result = str.match(/[aeiou]{2}/g);
//     return result;
// }
// console.log(findOccurrences());

// var distance = +prompt("enter the distance between two countires in kilometers");
// function Convmeters(){
//         var con = distance * 1000;
//         return con;
// }
// function Convfeet(){
//         var con = distance * 3280.8;
//         return con;
// }
// function Convinch(){
//         var con = distance * 39370.1;
//         return con;
// }
// function Convcentimeter(){
//         var con = distance * 100000;
//         return con;
// }

// console.log(Convmeters());
// console.log(Convfeet());
// console.log(Convinch());
// console.log(Convcentimeter());

// var totalpay = 0, n = +prompt("how many employees salary you wants to found");
// for(var i=1 ; i<=n ; i++){
//     var overWorked = +prompt("enter employee overtime hour's");
//     if(overWorked > 40){
//         var overtime = overWorked - 40;
//         var overpay = overtime * 12;
//         var totalpay = totalpay + (12*overtime); 
//         console.log("Employee "+i+" over time hour is "+overWorked+" and pay according to time is :"+overpay);
//     }
//     else{
//         console.log("you wants overtime pay ? then you do work for more than 24 hours.");
//     }
// }
// console.log("total employee's over time pay is :"+totalpay);

// var inputCash = +prompt("enter your currency notes in hundreds");
// if(inputCash < 1000){
//     console.log("you will have "+Math.floor(inputCash/100)+" hundred notes and "+Math.floor(((inputCash%100)/50))+" fifty notes and "+Math.floor((((inputCash%100)%50))/10)+" ten notes");      
// }
// else{
//     console.log("please enter value below thousand");
// }
