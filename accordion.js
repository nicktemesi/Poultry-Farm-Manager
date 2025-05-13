// script.js
const accordionButtons = document.querySelectorAll(".accordion_button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle the active class to show/hide
    const content = button.nextElementSibling;

    // Close all other open sections (optional)
    document.querySelectorAll('.accordion_content').forEach((el) => {
      if (el !== content) el.style.display = "none";
    });

    // Toggle current one
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
