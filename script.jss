const loginForm = document.getElementById("loginForm");

const loginPage = document.getElementById("loginPage");

const dashboard = document.getElementById("dashboard");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentId =
        document.getElementById("studentId").value;

    const password =
        document.getElementById("password").value;


    if (studentId === "student" && password === "1234") {

        loginPage.style.display = "none";

        dashboard.style.display = "block";

    } else {

        alert("Invalid Student ID or Password!");

    }

});


function logout() {

    dashboard.style.display = "none";

    loginPage.style.display = "flex";

    document.getElementById("loginForm").reset();

}