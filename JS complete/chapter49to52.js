function reg(){
    alert("form is submitted");
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var pass = document.getElementById("password").value;
    var mail = document.getElementById("mail").value;
    document.write("your form is successfully submitted.");
    document.write("<br />details:");
    document.write("<br />FIRST NAME :"+firstname);
    document.write("<br />LAST NAME :"+lastname);
    document.write("<br />EMAIL :"+mail);
    document.write("<br />PASSWORD :"+pass);
}