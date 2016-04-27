function validate() {
    "use strict";

    var email = document.forms.logmein.email.value;
    var pass = document.forms.logmein.password.value;
    var studentEmail = "student@aurora.com";
    var studentPassword = "studentpwd";
    var teacherEmail = "teacher@aurora.com";
    var teacherPassword = "teacherpwd";
    var adminEmail = "admin@aurora.com";
    var adminPassword = "adminpwd";

    if (email === studentEmail) {
        if (pass === studentPassword) {
            console.log("Student ok!");
            return true;
        }
    } else if (email === teacherEmail) {
        if (pass === teacherPassword) {
            console.log("Teacher ok!");
            return true;
        }
    } else if (email === adminEmail) {
        if (pass === adminPassword) {
            console.log("Admin ok!");
            return true;
        }
    } else {
        console.log("FAILED!");
        return false;
    }
}
