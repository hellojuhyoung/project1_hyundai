window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust scroll threshold as needed
    navbar.classList.add("scroll-up");
  } else {
    navbar.classList.remove("scroll-up");
  }
});
//play videos as a slideshow
const videos = document.querySelectorAll("video");
let currentVideoIndex = 0;

function playNextVideo() {
  videos[currentVideoIndex].style.display = "none";
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].style.display = "block";
  videos[currentVideoIndex].play();
}

// Play the first video initially
videos[currentVideoIndex].play();

// Event listeners for when the first video ends
videos[0].addEventListener("ended", playNextVideo);

// Event listeners for subsequent videos
for (let i = 1; i < videos.length; i++) {
  videos[i].addEventListener("ended", playNextVideo);
}
