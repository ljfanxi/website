var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Slide container 1
var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_container2");
  if (n > x.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1 - 1].style.display = "block";
}

// Slide container 2
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_container3");
  if (n > x.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}

// Slide container 4
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_container4");
  if (n > x.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4 - 1].style.display = "block";
}
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
      // Get the current scroll position and the height of the content
      var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      var contentHeight = contentElement.offsetHeight;

      // Set the button text and behavior based on scroll position
      if (scrollPosition === 0) {
          // The user is at the top of the page
          scrollButton.style.display = "none";
      } else if (scrollPosition + window.innerHeight >= contentHeight) {
          // The user is at the bottom of the page
          scrollButton.textContent = "Scroll Up";
          scrollButton.onclick = function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
          };
          scrollButton.style.display = "block";
      } else {
          // The user is neither at the top nor the bottom
          scrollButton.style.display = "none";
      }
  } else {
      console.error("Element with ID 'content-section' or 'scrollButton' not found.");
  }
}

// Update the scroll button initially and listen for scroll events
updateScrollButton();
window.addEventListener("scroll", updateScrollButton);