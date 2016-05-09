// ------------------ LECTURES MODAL ------------------------
// Get modal
var lecturesModal = document.getElementById('lecturesModal');

// Get the button that opens modal
var btnOpenLectures = document.getElementById('btnLectures');

// Get the span element that closes the modal
var lecturesClose = document.getElementsByClassName('close')[0];

// When the user clocks the button, open the modal
btnOpenLectures.onclick = function() {
	lecturesModal.style.display = "block";
};

// When the user clicks on <span> (X), close the modal
lecturesClose.onclick = function() {
	lecturesModal.style.display = "none";
};

// ------------------ TEACHERS MODAL ------------------------
var teachersModal = document.getElementById('teachersModal');
var btnOpenTeachers = document.getElementById('btnTeachers');
var teachersClose = document.getElementsByClassName('close')[1];

btnOpenTeachers.onclick = function() {
	teachersModal.style.display = "block";
};

teachersClose.onclick = function() {
	teachersModal.style.display = "none";
};

// ------------------ STUDENTS MODAL ------------------------
var studentsModal = document.getElementById('studentsModal');
var btnOpenStudents = document.getElementById('btnStudents');
var studentsClose = document.getElementsByClassName('close')[2];

btnOpenStudents.onclick = function() {
	studentsModal.style.display = "block";
};

studentsClose.onclick = function() {
	studentsModal.style.display = "none";
};
