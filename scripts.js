$(document).ready(function () {
    $("div").click( function (e) {
        $(this).text("Clicked");
        e.stopPropagation();
    });
    testAdminStud();
});

function clicksubmit() {
    form = $("#form").get(0);

    $("#firstname").text(form.elements["first-name"].value);
    $("#lastname").text(form.elements["last-name"].value);
    $("#phone").text(form.elements["phone"].value);
    $("#email").text(form.elements["email"].value);
}

Students = [];

function testAdminStud() {
    adminStud(new student(1, 'lars', 51), logItem);
    adminStud(new student(2, 'peter', 31), RegisterItem);
    console.log(Students)
}

function adminStud(student, callback) {
    callback(student);
}

function logItem(student) {
    console.log(student);
}

function RegisterItem(student) {
    Students.push(student);
}

function student(id, name, classroom) {
    this.id = id;
    this.name = name;
    this.classroom = classroom;
}