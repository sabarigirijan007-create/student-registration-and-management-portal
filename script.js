function registerStudent() {

    var name = document.getElementById("name").value;
    var regno = document.getElementById("regno").value;
    var department = document.getElementById("department").value;

    if (name == "" || regno == "" || department == "") {
        alert("Please fill all fields.");
    } else {
        alert("Registration Successful!");
    }
}

function studentLogin() {

    var regno = document.getElementById("loginRegno").value;
    var password = document.getElementById("loginPassword").value;

    if (regno == "" || password == "") {
        alert("Enter Register Number and Password");
    } else {
        alert("Login Successful!");
        window.location = "dashboard.html";
    }
}

function adminLogin() {

    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;

    if (username == "admin" && password == "admin123") {
        alert("Admin Login Successful");
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