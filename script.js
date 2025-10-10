// <!-- JavaScript for Hamburger Menu -->
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "mobile-nav-overlay";
  document.body.appendChild(overlay);

  // Function to close menu
  function closeMenu() {
    hamburgerBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Toggle mobile menu
  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (mobileNav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking close button in menu
  mobileMenuClose.addEventListener("click", closeMenu);

  // Close menu when clicking overlay
  overlay.addEventListener("click", closeMenu);

  // Close menu when clicking on mobile nav links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking on mobile nav buttons
  const mobileNavButtons = document.querySelectorAll(
    ".mobile-nav-buttons .btn"
  );
  mobileNavButtons.forEach((button) => {
    button.addEventListener("click", closeMenu);
  });

  // Testimonial Profile Switching Functionality
  const profileItems = document.querySelectorAll(".profile-item");
  const testimonialPosition = document.getElementById("testimonialPosition");
  const testimonialName = document.getElementById("testimonialName");
  const testimonialText = document.getElementById("testimonialText");
  const universityLogo = document.querySelector(".university-logo");

  // Testimonial data for each profile
  const testimonialData = {
    1: {
      position: "Chief Resident Internal Medicine, UCSD",
      name: "Sarah L.",
      text: "The quality and reliability of the equipment from PPE Rentals have significantly improved our workplace safety. The rental process is seamless, and their team is always ready to assist with any questions or needs we have.",
      logo: "images/uni-logo-right.png",
    },
    2: {
      position: "Senior Research Fellow, Johns Hopkins",
      name: "John M.",
      text: "ADOM Academy's ultrasound training program exceeded my expectations. The hands-on approach and expert instructors helped me master advanced techniques that I now use daily in my practice.",
      logo: "images/university_logo.svg",
    },
    3: {
      position: "Medical Director, Harvard Medical School",
      name: "Dr. Smith",
      text: "The comprehensive curriculum and state-of-the-art facilities at ADOM Academy provided me with the skills needed to excel in diagnostic ultrasound. Highly recommend their programs to any medical professional.",
      logo: "images/univeristy-left.svg",
    },
  };

  // Function to update testimonial content
  function updateTestimonial(profileId) {
    const data = testimonialData[profileId];
    if (data) {
      // Add smooth fade out effect
      testimonialPosition.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      testimonialName.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      testimonialText.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      universityLogo.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";

      // Fade out and slide up
      testimonialPosition.style.opacity = "0";
      testimonialPosition.style.transform = "translateY(-10px)";
      testimonialName.style.opacity = "0";
      testimonialName.style.transform = "translateY(-10px)";
      testimonialText.style.opacity = "0";
      testimonialText.style.transform = "translateY(-10px)";
      universityLogo.style.opacity = "0";
      universityLogo.style.transform = "translateY(-10px)";

      // Update content after fade out
      setTimeout(() => {
        testimonialPosition.textContent = data.position;
        testimonialName.textContent = data.name;
        testimonialText.textContent = data.text;
        universityLogo.src = data.logo;

        // Fade in and slide down
        testimonialPosition.style.opacity = "1";
        testimonialPosition.style.transform = "translateY(0)";
        testimonialName.style.opacity = "1";
        testimonialName.style.transform = "translateY(0)";
        testimonialText.style.opacity = "1";
        testimonialText.style.transform = "translateY(0)";
        universityLogo.style.opacity = "1";
        universityLogo.style.transform = "translateY(0)";
      }, 300);
    }
  }

  // Add click event listeners to profile items
  profileItems.forEach((item) => {
    item.addEventListener("click", function () {
      const profileId = this.getAttribute("data-profile");

      // Remove active class from all profiles
      profileItems.forEach((profile) => profile.classList.remove("active"));

      // Add active class to clicked profile
      this.classList.add("active");

      // Update testimonial content
      updateTestimonial(profileId);
    });
  });

  // Add smooth transitions to testimonial elements
  const testimonialElements = [
    testimonialPosition,
    testimonialName,
    testimonialText,
    universityLogo,
  ];
  testimonialElements.forEach((element) => {
    element.style.transition = "opacity 0.3s ease-in-out";
  });

  // Video Play/Pause Functionality
  const videoPlayer = document.querySelector(".video-player");
  const playButton = document.querySelector(".play-button");
  const videoOverlay = document.querySelector(".video-overlay");

  if (videoPlayer && playButton && videoOverlay) {
    // Function to play video
    function playVideo() {
      videoPlayer.play();
      videoOverlay.style.display = "none";
      playButton.style.display = "none";
      // Remove poster when playing
      videoPlayer.removeAttribute("poster");
    }

    // Function to pause video and show thumbnail
    function pauseVideo() {
      videoPlayer.pause();
      // Set poster to show thumbnail when paused
      videoPlayer.setAttribute("poster", "images/thumbnail.jpg");
      videoOverlay.style.display = "flex";
      playButton.style.display = "flex";
    }

    // Click event for play button
    playButton.addEventListener("click", function (e) {
      e.stopPropagation();
      playVideo();
    });

    // Click event for video overlay (to pause)
    videoOverlay.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!videoPlayer.paused) {
        pauseVideo();
      }
    });

    // Click event for video player (to pause)
    videoPlayer.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!videoPlayer.paused) {
        pauseVideo();
      }
    });

    // Show overlay when video ends
    videoPlayer.addEventListener("ended", function () {
      pauseVideo();
    });

    // Show thumbnail when video is paused (except when initially loading)
    videoPlayer.addEventListener("pause", function () {
      if (videoPlayer.currentTime > 0) {
        // Set poster to show thumbnail when paused
        videoPlayer.setAttribute("poster", "images/thumbnail.jpg");
        videoOverlay.style.display = "flex";
        playButton.style.display = "flex";
      }
    });

    // Hide overlay when video starts playing
    videoPlayer.addEventListener("play", function () {
      videoOverlay.style.display = "none";
      playButton.style.display = "none";
      // Remove poster when playing
      videoPlayer.removeAttribute("poster");
    });
  }
});
