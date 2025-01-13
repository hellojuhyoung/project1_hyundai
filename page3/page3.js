window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust scroll threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Add event listener for mouse hover
  document.querySelector(".navbar").addEventListener("mouseenter", () => {
    document.querySelector(".navbar").classList.add("scrolled");
  });

  // Remove the "scrolled" class when the mouse leaves the navbar
  document.querySelector(".navbar").addEventListener("mouseleave", () => {
    document.querySelector(".navbar").classList.remove("scrolled");
  });
});
