const hamburger = document.getElementById("hamburger");
const sideSlider = document.getElementById("sideSlider");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const crossIcon = document.getElementById("cross");

// Open side slider (slide-in effect from the right)
hamburger.addEventListener("click", () => {
    sideSlider.classList.remove("right-[-100%]"); // Slide in
    sideSlider.classList.add("right-0"); // Visible

    // Hide hamburger and show cross
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "flex";
});

// Close side slider (slide-out effect)
crossIcon.addEventListener("click", () => {
    sideSlider.classList.remove("right-0"); // Slide out
    sideSlider.classList.add("right-[-100%]"); // Hidden off-screen to the right

    // Show hamburger and hide cross
    hamburgerIcon.style.display = "flex";
    crossIcon.style.display = "none";
});