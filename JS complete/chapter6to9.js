// var num = 10;
// document.write("<h3>Result</h3>");
// document.write("<br />the value of num is:"+num);
// document.write("<br />...........");
// document.write("<br /><br />the value of ++num is :"+(++num));
// document.write("<br />Now the value of num is:"+num);
// document.write("<br /><br />the value of a++ is :"+(num++));
// document.write("<br />Now the value of num is:"+num);
// document.write("<br /><br />the value of --num is :"+(--num));
// document.write("<br />Now the value of num is:"+num);
// document.write("<br /><br />the value of a-- is :"+(num--));
// document.write("<br />Now the value of num is:"+num);

// var a=2,b=1,result;
// document.write("the result is :"+(--a - --b + ++b + b--));

// var num =+prompt("enter a number for multiplication table");
// var num1 = 5;
// if(num===0){
//     document.write("Oops!you dont enter any number thats a default table<br />");
//     for(var i=1 ; i<=10 ; i++)
//     {
//         document.write(" "+num1+" * "+i+" = "+(num1*i));
//         document.write("<br />");
//     }
// }
// else{
//     for(var i=1 ; i<=10 ; i++)
//     {
//         document.write(" "+num+" * "+i+" = "+(num*i));
//         document.write("<br />");
//     }
// }

// var sub1 = prompt("enter your first subject");
// var sub2 = prompt("enter your second subject");
// var sub3 = prompt("enter your third subject");
// var totalMark = 100;
// var emp = " ";
// var Obt_mark1 = +prompt("enter your first subject marks");
// var Obt_mark2 = +prompt("enter your second subject marks");
// var Obt_mark3 = +prompt("enter your third subject marks");
// var total_Obt = Obt_mark1+Obt_mark2+Obt_mark3;
// var percentage = ((total_Obt/(totalMark*3))*100);
// document.write("<table><tr><th>Subject<th/><th>Total marks<th/><th>Marks Obtained</th><th>Marks Percentage</th></tr>");
// document.write("<tr><td>"+sub1+"</td><td>"+totalMark+"</td><td>"+Obt_mark1+"</td><td>"+((Obt_mark1/totalMark)*100)+"%</td></tr>");
// document.write("<tr><td>"+sub2+"</td><td>"+totalMark+"</td><td>"+Obt_mark2+"</td><td>"+((Obt_mark2/totalMark)*100)+"%</td></tr>");
// document.write("<tr><td>"+sub3+"</td><td>"+totalMark+"</td><td>"+Obt_mark3+"</td><td>"+((Obt_mark3/totalMark)*100)+"%</td></tr>");
// document.write("<tr><td>"+emp+"</td><td>"+(totalMark*3)+"</td><td>"+total_Obt+"</td><td>"+percentage+"%</td></tr></table>");