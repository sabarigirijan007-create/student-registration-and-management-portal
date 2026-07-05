function getStudents() {
    try {
        return JSON.parse(localStorage.getItem("students")) || [];
    } catch (e) {
        return [];
    }
}

function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
    var tableBody = document.getElementById("studentTable");
    var totalStudents = document.getElementById("totalStudents");
    var students = getStudents();

    if (totalStudents) {
        totalStudents.textContent = students.length;
    }

    if (!tableBody) {
        return;
    }

    if (students.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='7'>No students registered yet.</td></tr>";
        return;
    }

    tableBody.innerHTML = "";

    students.forEach(function (student) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + student.name + "</td>" +
            "<td>" + student.regno + "</td>" +
            "<td>" + student.department + "</td>" +
            "<td>" + student.year + "</td>" +
            "<td>" + student.email + "</td>" +
            "<td>" + student.phone + "</td>" +
            "<td><button type='button'>View</button></td>";
        tableBody.appendChild(row);
    });
}

function registerStudent() {

    var name = document.getElementById("name").value.trim();
    var regno = document.getElementById("regno").value.trim();
    var department = document.getElementById("department").value;
    var year = document.getElementById("year").value;
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || regno === "" || department === "" || year === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    var students = getStudents();
    var existingStudent = students.find(function (student) {
        return student.regno === regno;
    });

    if (existingStudent) {
        alert("Register number already exists.");
        return;
    }

    students.push({
        id: Date.now(),
        name: name,
        regno: regno,
        department: department,
        year: year,
        email: email,
        phone: phone,
        password: password
    });

    saveStudents(students);
    alert("Registration Successful!");

    var registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.reset();
    }
}

function studentLogin() {

    var regno = document.getElementById("loginRegno").value.trim();
    var password = document.getElementById("loginPassword").value;

    if (regno === "" || password === "") {
        alert("Enter Register Number and Password");
    } else {
        alert("Login Successful!");
        window.location = "manage-students.html";
    }
}

function adminLogin() {

    var username = document.getElementById("adminUsername").value.trim();
    var password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "admin123") {
        alert("Admin Login Successful");
        window.location = "manage-students.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function makePayment() {
    alert("Payment Successful!");
}


function sendMessage() {
    alert("Message Sent Successfully!");
}


function supportRequest() {
    alert("Support Request Submitted!");
}

document.addEventListener("DOMContentLoaded", function () {
    renderStudents();

    var registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            registerStudent();
        });
    }

    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            studentLogin();
        });
    }

    var adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            adminLogin();
        });
    }
});