// Variable for background-opacity
var background = document.getElementById('id');

// ------------------ SUBJECTS MODAL ------------------------
// Get modal
var subjectsModal = document.getElementById('subjectsModal');

// Get the button that opens modal
var btnOpenSubjects = document.getElementById('btnSubjects');

// Get the span element that closes the modal
var subjectsClose = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btnOpenSubjects.onclick = function() {
	subjectsModal.style.display = 'block';
	$('.background-opacity').fadeIn(200);
};

// Get the background-opacity from css


// When the user clicks on <span> (X), close the modal
subjectsClose.onclick = function() {
	subjectsModal.style.display = 'none';
};




// $('#subjectsModal').click(function(){
// 	$('#subjectsModal').show(function(){
// 		document.body.addEventListener('click', boxCloser, false);
// 	});
// });
//
// function boxCloser(e){
// 	if(e.target.id != '#subjectsModal'){
// 		document.body.removeEventListener('click', boxCloser, false);
// 		$('#subjectsModal').hide();
// 	}
// }





// jQuery to toggle visibility for subjects
// IMT1471 WEB PROJECT
$( '#webProject h3' ).click(function() {
    $( '#webProject .lecture-list' ).slideToggle(600);
});

// IMT1292 WEB CODING
$( '#webCoding h3' ).click(function() {
    $( '#webCoding .lecture-list' ).slideToggle(600);
});

// IMT2661 MOBILE MEDIA DESIGN
$( '#mobileMedia h3' ).click(function() {
    $( '#mobileMedia .lecture-list' ).slideToggle(600);
});

// IMT2002
$( '#colourManagement h3' ).click(function() {
    $( '#colourManagement .lecture-list' ).slideToggle(600);
});

// ------------------ TEACHERS MODAL ------------------------
var teachersModal = document.getElementById('teachersModal');
var btnOpenTeachers = document.getElementById('btnTeachers');
var teachersClose = document.getElementsByClassName('close')[1];

btnOpenTeachers.onclick = function() {
	teachersModal.style.display = 'block';
};

teachersClose.onclick = function() {
	teachersModal.style.display = 'none';
};

// ------------------ STUDENTS MODAL ------------------------
var studentsModal = document.getElementById('studentsModal');
var btnOpenStudents = document.getElementById('btnStudents');
var studentsClose = document.getElementsByClassName('close')[2];

btnOpenStudents.onclick = function() {
	studentsModal.style.display = 'block';
};

studentsClose.onclick = function() {
	studentsModal.style.display = 'none';
};

//
// $(document).ready(function(){
//
//     $("h3").click(function(){
//       if( $("lecture-list").is(":visible"))
//           $("lecture-list").toggle(100);
//     });
// });
