// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu on link click (mobile UX improvement)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Handle AWS Program Registration Form
const form = document.getElementById("aws-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted:", data);

    // Example: Display confirmation
    alert(`✅ Thank you, ${data.fullName}! 
Your registration for the AWS Study Program has been received.`);

    form.reset();
  });
}