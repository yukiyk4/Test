// 1. Tab Switching Logic
function openTab(evt, tabName) {
    // Hide all tab content boxes
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Remove "active" color from all buttons
    const links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Show the specific tab and add the active class to the clicked button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// 2. Photo Upload Logic
function triggerUpload() {
    // Clicks the hidden <input type="file">
    document.getElementById('cameraInput').click();
}

function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result; // Put image data into the <img> src
            preview.style.display = 'block'; // Make the image visible
        };

        reader.readAsDataURL(file);
    }
}