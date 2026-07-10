// Welcome message
window.onload = function () {
    alert("Welcome to Densmile Dental Clinic!");
};

// Book Appointment Button
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", function () {
        alert("Thank you! Our team will contact you soon.");
    });
}