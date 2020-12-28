// var cityname = prompt("enter your city name");
// if(cityname==="karachi"||cityname==="KARACHI"){
//     alert("Welcome to the city of lights.");
// }
// else{
//     alert("Welcome to the city");
// }

// var gender = prompt("enter your gender");
// if(gender==="male"||gender==="MALE"){
//     alert("Good morning sir..!");
// }
// else if(gender==="female"||gender==="FEMALE"){
//     alert("Good morning Ma'am..!");
// }
// else{
//     alert("you entered incorrect gender");
// }

// var traffic_Signal = prompt("enter the color of traffic signal");
// if(traffic_Signal==="red"){
//     alert("Must stop..!");
// }
// else if(traffic_Signal==="green"){
//     alert("Move now..!");
// }
// else if(traffic_Signal==="yellow"){
//     alert("Ready to move..!");
// }
// else{
//     alert("you entered incorrect traffic color");
// }

// var fuel = +prompt("enter your car/bike fuel in litres");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car/bike");
// }
// else{
//     alert("your fuel is OK..!");
// }

// checl the following conditions :- 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); // this condition is true.
// } 

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); // this condition is false.
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true"); //this is false
// }
// if (c === 13){
// alert("condition 2 is true"); //this is true
// }
// if (++c < 14){
// alert("condition 3 is true");//this is false
// }
// if(c === 14){
// alert("condition 4 is true");//this is true
// }    

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;   //Alert will run
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");  //true will run but false will not run.
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat"); //here we will check the alphabets , alert will run because cat (t) is greater than car (r).
//     }

// document.write("<h1>Mark Sheet</h1>");
// var sub1 = +prompt("enter your first subject marks");
// var sub2 = +prompt("enter your second subject marks");
// var sub3 = +prompt("enter your third subject marks");
// var totalmarks = +prompt("enter your total marks");
// var marksObt = sub1+sub2+sub3;
// var percentage = (marksObt/totalmarks)*100;
// if(percentage>=80){
//     document.write("Total Marks :"+totalmarks+"<br />Marks Obtained :"+marksObt+"<br />Percentaege :"+percentage+"%");
//     document.write("<br />Grade : A-one<br />Remarks : Excellent");
// }
// else if(percentage>=70){
//     document.write("Total Marks :"+totalmarks+"<br />Marks Obtained :"+marksObt+"<br />Percentaege :"+percentage+"%");
//     document.write("<br />Grade : A<br />Remarks : Good");
// }
// else if(percentage>=60){
//     document.write("Total Marks :"+totalmarks+"<br />Marks Obtained :"+marksObt+"<br />Percentaege :"+percentage+"%");
//     document.write("<br />Grade : B<br />Remarks : You need to improve");
// }
// else if(percentage<60){
//     document.write("Total Marks :"+totalmarks+"<br />Marks Obtained :"+marksObt+"<br />Percentaege :"+percentage+"%");
//     document.write("<br />Grade : Fail<br />Remarks : Sorry");
// }
// else{
//     alert("please enter correct number");
// }

// document.write("<h1>Guess Game</h1>")
// var secret_num = 5;
// var num = +prompt("enter a secret number (Range 1 to 10)");
// if(secret_num===num){
//     alert("Bingo..! You are correct");
// }
// else if(secret_num===num+1||secret_num===num-1){
//     alert("you are close enough..!");
// }
// else{
//     alert("Oops..!Try again");
// }

// var num = +prompt("enter a number");
// if(num%3==0){
//     alert("this number is divisible by 3");
// }
// else{
//     alert("this number isnt divisible by 3");
// }

// var num = +prompt("enter a number");
// if(num %2==0){
//     alert("this is even number");
// }
// else{
//     alert("this is old number");
// }

// var temp = +prompt("enter a temperature");
// if(temp>40){
//     alert("it is too hot outside");
// }
// else if(temp>30){
//     alert("Today's wheather is normal");
// }
// else if(temp>20){
//     alert("Today's wheather is cold");
// }
// else if(temp>10){
//     alert("OMG! today's wheather is too cold");
// }
// else{
//     alert("enter a correct temperature");
// }

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var operator = prompt("enter operator");
// if(operator==="+"){
//     alert(" "+num1+" "+operator+" "+num2+" = "+(num1+num2));
// }
// else if(operator==="-"){
//     alert(" "+num1+" "+operator+" "+num2+" = "+(num1-num2));
// }
// else if(operator==="*"){
//     alert(" "+num1+" "+operator+" "+num2+" = "+(num1*num2));
// }
// else if(operator==="/"){
//     alert(" "+num1+" "+operator+" "+num2+" = "+(num1/num2));
// }
// else if(operator==="%"){
//     alert(" "+num1+" "+operator+" "+num2+" = "+(num1%num2));
// }
// else{
//     alert("enter correct elements");
// }