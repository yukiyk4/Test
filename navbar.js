/* navbar.js */
export function initNavbar() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuOverlay = document.querySelector(".menu_overlay");

    if (menuBtn && menuOverlay) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            menuOverlay.classList.toggle("active");
        });
    }
}