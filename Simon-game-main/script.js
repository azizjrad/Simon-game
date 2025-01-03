const typingSpeed = 100;
let index = 0;

const typingEffect = document.getElementById("typing-effect");

let text;

if (document.title === "Accueil") {
  text = "Bienvenue sur le jeu Simon";
} else if (document.title === "Rules") {
  text = "Les règles du jeu de Simon";
} else if (document.title === "Leaderboard") {
  text = "Les stats des leaders";
} else (document.title === "Contact") {
  text = "Contactez-nous";
}

function type() {
  if (index < text.length) {
    typingEffect.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}
if (typingEffect && text) {
  type();
}

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

const form = document.querySelector(".contact-form");
