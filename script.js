function scrollToContent() {
    var contentElement = document.getElementById("content-section");

    if (contentElement) {
        // Scroll to the content with smooth behavior
        contentElement.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Element with ID 'content-section' not found.");
    }
}

function updateScrollButton() {
    var contentElement = document.getElementById("content-section");
    var scrollButton = document.getElementById("scrollButton");

    if (contentElement && scrollButton) {
        // Get the current scroll position
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        // Set the button text and behavior based on scroll position
        if (scrollPosition === 0) {
            scrollButton.textContent = "Scroll Down";
            scrollButton.onclick = scrollToContent;
        } else {
            scrollButton.textContent = "Scroll Up";
            scrollButton.onclick = function() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
        }
    } else {
        console.error("Element with ID 'content-section' or 'scrollButton' not found.");
    }
}

// Update the scroll button initially and listen for scroll events
updateScrollButton();
window.addEventListener("scroll", updateScrollButton);