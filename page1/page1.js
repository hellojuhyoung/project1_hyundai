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

//play videos as a slideshow
const videos = document.querySelectorAll("video");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const textOverlays = document.querySelectorAll(".textOverlay");

let currentVideoIndex = 0;

function playNextVideo() {
  videos[currentVideoIndex].style.display = "none";
  textOverlays[currentVideoIndex].style.display = "none";
  currentVideoIndex = (currentVideoIndex + 1) % videos.length; // sets new currentVideoIndex value
  videos[currentVideoIndex].style.display = "block";
  textOverlays[currentVideoIndex].style.display = "block";
  videos[currentVideoIndex].play();
}
function prevVideo() {
  videos[currentVideoIndex].style.display = "none";
  textOverlays[currentVideoIndex].style.display = "none";
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // sets new currentVideoIndex value
  videos[currentVideoIndex].style.display = "block";
  textOverlays[currentVideoIndex].style.display = "block";
  videos[currentVideoIndex].play();
}

textOverlays.forEach((overlay, index) => {
  if (index !== 0) {
    overlay.style.display = "none";
  }
});
// Play the first video initially
videos[currentVideoIndex].play();

// Event listener for automatic slideshow
videos[currentVideoIndex].addEventListener("ended", playNextVideo);

// Event listeners for subsequent videos
for (let i = 1; i < videos.length; i++) {
  videos[i].addEventListener("ended", playNextVideo);
}

// Event listeners for button clicks
prevBtn.addEventListener("click", () => {
  videos[currentVideoIndex].pause(); // Pause current video
  prevVideo();
});
nextBtn.addEventListener("click", () => {
  videos[currentVideoIndex].pause(); // Pause current video
  playNextVideo();
});

const scrollToTopButton = document.getElementById("scrollToTopButton");
// const targetSection = document.querySelector(".section4Top");
const scrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  if (scrollPosition > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }

  //   if (scrollPosition >= targetSection.offsetTop) {
  //     scrollToTopButton.style.display = "none";
  //   }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
