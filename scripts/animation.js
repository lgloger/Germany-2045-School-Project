// ========== IMAGE TRANSITION ANIMATION ==========

const imageContainer = document.getElementById("firstSectionCon");
const imageContainerSourceText = document.getElementById(
  "firstSectionImageSource"
);

let isImageOne = false;
const imageOne = "url('../assets/images/Zukunftsbild_Deutschland_2_2045.png')";
const sourceOne = `NEWS&ART/ Visualisierung: Reinventing Society & Wire Collective & German Zero/ www.realutopien.de/ Zukunftsbild 2045 / `;
const imageTwo = "url('../assets/images/Zukunftsbild_Deutschland_2045.png')";
const sourceTwo = `Maximilian Schönherr / Visualisierung: Reinventing Society & loomn/ www.realutopien.de / Zukunftsbild 2045 / `;

function changeBackground() {
  if (isImageOne) {
    imageContainer.style.backgroundImage = imageTwo;
    imageContainerSourceText.textContent = sourceTwo;
  } else {
    imageContainer.style.backgroundImage = imageOne;
    imageContainerSourceText.textContent = sourceOne;
  }

  isImageOne = !isImageOne;
}

changeBackground();
setInterval(changeBackground, 10000);

// ========== INFOBAR ANIMATION ==========

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  let scrollPeakY = lastScrollY;

  const infoContainer = document.getElementById("infoContainer");

  addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      scrollPeakY = currentScrollY;

      infoContainer.classList.remove("infoContainerOut");
      infoContainer.classList.add("infoContainerIn");
    } else {
      infoContainer.classList.remove("infoContainerIn");
      infoContainer.classList.add("infoContainerOut");
    }

    lastScrollY = currentScrollY;
  });
});
