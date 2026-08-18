const registrationForm = document.querySelector("form");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentName = document.getElementById("student-name").value;

    alert("Application submitted successfully for " + studentName + "!");
});