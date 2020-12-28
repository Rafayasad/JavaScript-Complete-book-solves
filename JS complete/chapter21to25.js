// var firstname = prompt("enter your first name");
// var Secondname = prompt("enter your second name");
// alert("Hello ! "+firstname+" "+Secondname);

// var userInput = prompt("enter your fav mobile");
// document.write("My fav mobile is : "+userInput+"<br />The length of a string is : "+userInput.length);

// var str = "Pakistani";
// document.write("the word : "+str+"<br />the index of 'n' is: "+str.indexOf('n'));

// var str = "Hello world";
// document.write("the word : "+str+"<br />the last index of 'l' is : "+str.lastIndexOf('l'));

// var str = "pakistani";
// document.write("the word : "+str+"<br />the character ar 3rd index is : "+str.charAt(3));

// var str = "hyder";
// document.write("City : "+str+"abad"+"<br />After replacement :"+str.replace("hyder","islam")+"abad"); //remaining

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(" "+message.replace(/and/gi, "&"));

// var str = prompt("enter a string");
// var num = +prompt("enter a number");
// document.write("value : "+str+"<br />type : "+typeof(str));
// document.write("<br />value : "+num+"<br />type : "+typeof(num));

// var str = "peanuts";
// document.write(" "+str.toUpperCase());

// var userInput = prompt("enter a string");
// document.write(""+userInput.charAt().toUpperCase()+""+userInput.split("").splice(1,userInput.length).join(""));

// var num = 35.36;
// document.write(""+num.toString().replace(".",''));

// var userInput = prompt("enter a username");
// if(userInput.includes(String.fromCharCode(33)) || userInput.includes(String.fromCharCode(44)) || userInput.includes(String.fromCharCode(46)) || userInput.includes(String.fromCharCode(64))){
//     alert("invalid");
// }
// else{
//     alert(userInput);
// }

// var A = ["cookie","patties","apple pie","cake","chips"];
// var userInput = prompt("enter a item you wants").toLowerCase();
// if(A.indexOf(userInput) !== -1){
//     document.write(" "+userInput+" is avaiable at index "+A.indexOf(userInput)+" in oue bakery");
// }
// else{
//     document.write("invalid");
// }

// var pass = prompt("set a password\na. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long");
// var a = pass.split("");
// if(a[0] >= 0 ){
//     console.log("invalid");
// }
// else if(pass.length > 6){
//     console.log("pass must be at least 6 characters");
// }
// else if(a[0] >= 'a' || a[0] >= 'A'){
//     console.log("password saved");
// }
// else{
//     console.log("something you did wrong");
// }

// var str = "University of Karachi";
// var strr = str.split("");
// for(var i=0; i<strr.length; i++){
//     document.write(" "+strr[i]);
//     document.write("<br />");
// }

// var str = "pakistan";
// document.write(" "+str.split("").pop());

// var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var strrr = str.split(" ");
// function abc(strr){
//     return strr == "the";
// }
// console.log(""+strrr.filter(abc));

