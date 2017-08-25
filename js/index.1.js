// Initialize Firebase
var config = {
    apiKey: YOURAPIKEY,
    authDomain: YOURDOMAIN,
    databaseURL: YOURURL,
    projectId: YOURPROJID,
    storageBucket: YOURSTORAGE,
    messagingSenderId: YOURID
};

firebase.initializeApp(config);
//end initialise firenase

// Input Lock
$('textarea').blur(function() {
    $('#hire textarea').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('textarea + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:first-child input').blur(function() {
    $('#hire .field:first-child input').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function() {
    $('#hire .field:nth-child(2) input').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
        }
    });
});

/*
document.getElementById('julescontactform').addEventListener(submit, submitForm);

function submitForm(e) {
    e.preventDefault();

    console.log(12345);
}
*/

$("form#julescontactform").submit(function(event) {
    event.preventDefault();
    // run a function here
    console.log(12345);

    var name = getInputVal('name');
    var email = getInputVal('email');
    var msg = getInputVal('msg');

    console.log(name);
});

//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;

}