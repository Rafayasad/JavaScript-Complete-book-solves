// function currentDateAndTime(){
//     var dat = new Date();
//     document.write(""+dat);
// }
// currentDateAndTime();

// function greeting(){
//     var firstname = prompt("enter your first name");
//     var lastname = prompt("enter your last name");
//     alert("Greet ! "+firstname+""+lastname);
// }
// greeting();

// function add(a,b){
//     var a = +prompt("enter first number");
//     var b = +prompt("enter second number");
//     var sum = a + b;
//     alert(sum); 
// }
// add();

// function calc(num1,num2,operator){
//     if(operator === "+"){
//         return num1 + num2 ;
//     }
//     else if(operator === "-"){
//         return num1 - num2 ;
//     }
//     else if(operator === "*"){
//         return num1 * num2 ;
//     }
//     else if(operator === "/"){
//         return num1 / num2 ;
//     }
// }
// var res = calc(2,2,"+");
// var res1 = calc(2,2,"-");
// var res2 = calc(2,2,"*");
// var res3 = calc(2,2,"/");

// console.log(res);
// console.log(res1);
// console.log(res2);
// console.log(res3);

// var a = +prompt("enter a");
// function sqr(a){
//     return Math.pow(a,2);
// }
// var res = sqr(a);
// console.log(res);

// function fac(n){
//     n = 1;
//     var num = +prompt("enter a number its convert to its factorial");
//     for(var i=num ; i>=1 ; i--){
//         n = n * i ;
//     }
//     console.log(n);
// }
// fac();

// function count(){
//     var start = +prompt("enter start number");
//     var end = +prompt("enter end number");
//     for(var i=start ; i<=end ; i++){
//         console.log(i);
//     }
// }
// count();

// var base = +prompt("enter base");
// var perpendicular = +prompt("enter perpendicular");
// function outerhyp(base,perpendicular){
//     function interhypsqr(x){
//         return Math.pow(x,2);
//     }
//     return Math.sqrt(interhypsqr(base) + interhypsqr(perpendicular));
// }
// var result = outerhyp(base,perpendicular);
// console.log(result);

// function area(h , w = 4){
//         return w*h;
// }
// var res = area(4);
// console.log(res);

// function panlindrome(){
//     var string = prompt("enter a string");
//     var str = string.split('').reverse().join('');
//     if(str === string){
//         console.log("its palindrome");
//     }
//     else{
//         console.log("its not palindrome");
//     }
// }
// panlindrome();

// function uprCase(str){
//         var word = str.split(" ");
//         for(var i=0 ; i<word.length ; i++){
//         word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//         }
//         return word.join(" ");
// }

// console.log(uprCase("the quick brown"));

// function long(str){
//     var word = str.split(" ");
//     var longstr = 0,a;
//     for(var i=0 ; i<word.length ; i++){
//        if(word[i].length > longstr){
//            longstr = word[i].length;
//            a = word[i];
//         }
//     }
//     return a;
// }
// console.log(long("web development app"));

// function str(String,letter){
//     var word = 0;
//     for(var i=0 ; i<String.length ; i++){
//         if(String.charAt(i) == letter){
//             word = word + 1;
//         }
//     }
//     return word;
    
// }
// console.log(str("asadassfacs","a"));

// function calcCircumference(rad){
//     return (2 * 3.142 * rad);
// }
// function calcArea(rad){
//     return (3.142 * rad * rad);
// }
// console.log(calcCircumference(2));
// console.log(calcArea(2));