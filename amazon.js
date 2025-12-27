console.log("JS linked!");
const languages = ["English", "Hindi", "Urdu", "Gujarati", "Punjabi"];
let index = 0;

const box = document.getElementById("langBox");
box.value = languages[index];

// Jab arrow (↑ ↓) press kare
box.addEventListener("input", () => {
  if (box.value > index) index++;
  else index--;

  if (index < 0) index = languages.length - 1;
  if (index >= languages.length) index = 0;

  box.value = languages[index];
});
/*
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});
*/
// ========== SIDEBAR OPEN/CLOSE ==========

const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

if (overlay && openBtn && closeBtn) {
  openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    // dark area pe click kare to band
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
}

// ========== HERO IMAGE SLIDER ==========

const heroSection = document.querySelector(".main-sec");

// yaha apni images ka path daal
const heroImages = [
  "img/hero_img2.jpg",
  "img/hero_img3.jpg",
  "img/hero_img4.jpg",
  "img/hero_img5.jpg",
  "img/hero_img6.jpg",
  "img/hero_img7.jpg",
  "img/hero_img8.jpg",
  "img/hero_img9.jpg",
  "img/hero_img.jpg",
  "img/hero_img10.jpg",
  "img/hero_img11.jpg",
  "img/hero_img12.jpg",
  "img/uber.jpg",
  "img/af.jpg",
  "img/pc_hero.jpg",
  "img/ads.jpg",
];

let heroIndex = 0;

function changeHeroImage() {
  if (!heroSection) return;

  // next image index
  heroIndex = (heroIndex + 1) % heroImages.length;

  // background image change
  heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}

// har 4 second me image change
if (heroSection && heroImages.length > 0) {
  setInterval(changeHeroImage, 2000);
}
