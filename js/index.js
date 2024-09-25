const typewriterText = document.querySelector(".typewriter");
const phrases = [
  "Welcome to EKSU Consultancy Services Ltd.",
  "we at your service",
];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
  if (characterIndex < phrases[phraseIndex].length) {
    typewriterText.textContent += phrases[phraseIndex][characterIndex];
    characterIndex++;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (characterIndex > 0) {
    typewriterText.textContent = phrases[phraseIndex].substring(
      0,
      characterIndex - 1
    );
    characterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 250);
  }
}

type();

// Footer year Dynamic/
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
