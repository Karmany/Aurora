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
    document.getElementById("logmein").addEventListener("submit", function (e) {
        if (email.value === studentEmail) {
            if (pass.value === studentPassword) {
                console.log("Student ok!");
                return true;
            }
        } else if (email.value === teacherEmail) {
            if (pass.value === teacherPassword) {
                console.log("Teacher ok!");
                return true;
            }
        } else if (email.value === adminEmail) {
            if (pass.value === adminPassword) {
                console.log("Admin ok!");
                return true;
            }
        } else {
            console.log("FAILED!");
            return false;
        }
    });
}
