export function Lightdark() {
    // 1. Find the toggle button
    const themeToggleBtn = document.getElementById("theme-toggle");

    // 2. Check if the user previously chose Dark Mode (optional but nice)
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleBtn.textContent = "☀️ Light Mode";
    }

    // 3. Add the click event listener
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            // Toggle the class on the body
            document.body.classList.toggle("dark-mode");

            // Update the button text based on the active mode
            if (document.body.classList.contains("dark-mode")) {
                themeToggleBtn.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark"); // Saves choice for next visit
            } else {
                themeToggleBtn.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light"); // Saves choice for next visit
            }
        });
    }
}