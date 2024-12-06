// Navbar'ın scroll edildiğinde rengini değiştirme
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    document.querySelector(".navbar").style.background = "rgba(0, 0, 0, 0.8)";
  }
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
