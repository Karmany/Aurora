function logIn() {
    "use strict";

    var a = document.forms.logmein.email.value;
    var b = document.forms.logmein.password.value;
    var studentEmail = "student@aurora.com";
    var studentPassword = "studentpwd";
    var teacherEmail = "teacher@aurora.com";
    var teacherPassword = "teacherpwd";
    var adminEmail = "admin@aurora.com";
    var adminPassword = "adminpwd";

    if (a === studentEmail && b === studentPassword) {
        window.location = "http://www.google.com/";
    }
    if (a === teacherEmail && b === teacherPassword) {
        window.location = "http://www.google.com/";
    }
    if (a === adminEmail && b === adminPassword) {
        window.location = "http://www.google.com/";
    } else {
        alert("Wrong login!");
    }
}
