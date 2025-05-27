console.log("✅ script.js is running");

// Countdown timer
const weddingDate = new Date("2025-10-10T12:00:00").getTime();
  
function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;
  
      if (distance < 0) {
        document.querySelector(".countdown").innerHTML = "¡Es el gran día!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
    // Swiper gallery
    new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  
    // Timeline scroll animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    timelineItems.forEach(item => observer.observe(item));
  
    // Tally form iframe fallback
    const iframe = document.querySelector('iframe[data-tally-src]');
    if (iframe) {
      iframe.src = iframe.getAttribute('data-tally-src');
    }