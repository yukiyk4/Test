/* navbar.js */
export function initNavbar() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuOverlay = document.querySelector(".menu_overlay");
    const menuBackdrop = document.querySelector(".menu-backdrop");

    if (menuBtn && menuOverlay && menuBackdrop) {
        // Toggle elements simultaneously when hamburger button is clicked
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            menuOverlay.classList.toggle("active");
            menuBackdrop.classList.toggle("active");
        });

        // Close the navigation layout if the user clicks directly on the blurred backdrop area
        menuBackdrop.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            menuOverlay.classList.remove("active");
            menuBackdrop.classList.remove("active");
        });
    }
}
