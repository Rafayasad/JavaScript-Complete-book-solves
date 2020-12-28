// var arr = [];   //literal notation
// var arr1 = {    //Object notation
// };

// var arr2 = ["rafay","asad"];
// var arr3 = [0,1,2,3];
// var myArr = [];
// var value = 2;
// for(var i = 0; i < value; i++) {       //boolean method 
// myArr.push(true);
// }
// alert(myArr);

// var arrr = ["rafay","0","asad","1","2"]; //mixed array
// alert(arrr);

// document.write("<h1>Qualifications</h1>");
// var arr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for(var i=0 ;i<arr.length; i++){
//     document.write(" "+arr[i]);
//     document.write("<br />");
// }

// var arr = ["rafay","asad","mustafa"];
// var score = [320,230,480];
// var total_mark = 500;
// for(var i=0; i<arr.length; i++){
//     document.write("Score of "+arr[i]+" is "+score[i]+" Percentage: "+((score[i])/total_mark)*100+"%");
//     document.write("<br />");
// }

// var arr = ["red","black","voilet"];
// document.write(" "+arr);
// var user = prompt("what color you wants to add in beginning");
// document.write("<br />the updated list is : "+(arr.unshift(user))); //unshift add in beginning
// document.write("<br /> "+arr);
// var user = prompt("what color you wants to add in ending");
// document.write("<br />the updated list is : "+(arr.push(user))); //push add in ending
// document.write("<br /> "+arr);
// var user = prompt("Add color in beginning");
// var user1 = prompt("Add one more color in beginning");
// document.write("<br />the updated list is : "+(arr.unshift(user,user1))); //unshift add in beginning
// document.write("<br /> "+arr);
// document.write("<br />the updated list is : "+(arr.shift(user))); //shift delete in beginning
// document.write("<br />"+arr);
// document.write("<br />the updated list is : "+arr.pop()); //pop delete in ending
// document.write("<br />"+arr);
// var user2 = prompt("At which position you wants to add colors");
// var user3 = prompt("enter color name");
// document.write("<br />the updated list is : "+arr.splice(user2,0,user3));   //splice use for adding position,deleting point or add something
// document.write("<br />"+arr);
// var user4 = prompt("At which position you wants to delete colors");
// var del = prompt("how many colors you wants to delete");
// document.write("<br />the updated list : "+arr.splice(user4,del));
// document.write("<br />"+arr);

// var arr = [120,450,555,111,102];
// document.write("Ascending array sorting :"+arr.sort());

// var arr = ["karachi","lahore","pindi","islamabad","quetta"];
// document.write("cities :"+arr);
// document.write("<br />selected cities are :"+arr.slice(1,4));

// var arr = ["this","is","my","cat"];
// document.write(" "+arr.join(" ")); //" " is used for omitted comma 

// var arr = ["keyboard","mouse","printer","monitor"];
// document.write("Devices :"+arr);
// for(var i=0 ;i<arr.length ;i++){
//     document.write("<br />out:<br />"+arr[i]);
// }

// var arr = [];            // FIFO method first in first out
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices :"+arr);
// for(var i=0 ;i<=arr.length ;i++){
//     document.write("<br />Out :<br />"+arr.shift());
// }

// var arr = [];            // LIFO method last in first out
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices :"+arr);
// for(var i=arr.length-1 ;i>=0 ;i--){
//     document.write("<br />Out :<br />"+arr.pop());
// }

// var arr = ["Apple","Sumsung","Motarola","Nokia","Huawei","Sony"];
// document.write("<label for='Menu'>Mobile Brand : </label>");
// document.write("<select name='menu'>");
// for(var i=0; i<arr.length; i++){
// document.write("<br /><option value=''");
// document.write("</option>"+arr[i]);
// }
// document.write("</select>");
