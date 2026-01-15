document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  let scrollPeakY = lastScrollY;
  const glassEffectHeader = document.querySelector(".glassEffectHeader");
  const glassEffectLogo = document.querySelector(".glassEffectLogo");
  const glassIconHeader = document.querySelectorAll(".glassIconHeader");

  addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;
    const UPWARD_THRESHOLD = 50;

    if (currentScrollY > lastScrollY) {
      scrollPeakY = currentScrollY;

      glassEffectLogo.classList.remove("glassEffectLogoAnimation");
      glassEffectLogo.classList.add("glassEffectLogoAnimationOut");

      glassIconHeader.forEach((icon) => {
        icon.classList.remove("glassEffectInsideAnimation");
      });

      // Set glassEffectHeader display none after animation
      setTimeout(() => {
        glassEffectHeader.style.display = "none";
      }, "100");
    } else if (currentScrollY < lastScrollY) {
      if (
        scrollPeakY - currentScrollY >= UPWARD_THRESHOLD ||
        currentScrollY <= 50
      ) {
        glassEffectLogo.classList.remove("glassEffectLogoAnimationOut");

        // Set glassEffectHeader display flex before animation
        glassEffectHeader.style.display = "flex";

        glassEffectLogo.classList.add("glassEffectLogoAnimation");

        glassIconHeader.forEach((icon) => {
          icon.classList.add("glassEffectInsideAnimation");
        });
      }
    } else {
      glassEffectLogo.classList.remove("glassEffectLogoAnimation");
      glassEffectLogo.classList.add("glassEffectLogoAnimationOut");

      glassIconHeader.forEach((icon) => {
        icon.classList.remove("glassEffectInsideAnimation");
      });

      // Set glassEffectHeader display none after animation
      setTimeout(() => {
        glassEffectHeader.style.display = "none";
      }, "100");
    }

    lastScrollY = currentScrollY;
  });
});
