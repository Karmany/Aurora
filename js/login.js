function validate() {
    "use strict";

    var email = document.forms.logmein.email.value;
    var pass = document.forms.logmein.password.value;
    var studentEmail = "student@aurora.no";
    var studentPassword = "studentpwd";
    var teacherEmail = "teacher@aurora.no";
    var teacherPassword = "teacherpwd";
    var adminEmail = "admin@aurora.no";
    var adminPassword = "adminpwd";

    if (email === studentEmail) {
        if (pass === studentPassword) {
            console.log("Student ok!");
            sessionStorage.role = 'student';
            $('#logmein').attr('action', 'index.html#/' + page3)
            return true;
        }
    } else if (email === teacherEmail) {
        if (pass === teacherPassword) {
            console.log("Teacher ok!");
            sessionStorage.role = 'teacher';
            $('#logmein').attr('action', 'index.html#/' + page5)
            return true;
        }
    } else if (email === adminEmail) {
        if (pass === adminPassword) {
            console.log("Admin ok!");
            $('#logmein').attr('action', 'index.html#/' + page6)
            sessionStorage.role = 'admin';
            return true;
        }
    } else {
        console.log("FAILED!");
        event.preventDefault()
        document.getElementById('loginError').style.display = "block"
        document.getElementById('loginEmail').style.border = "2px solid #E57373"
        document.getElementById('loginPassword').style.border = "2px solid #E57373"
        return false;
    }
}
