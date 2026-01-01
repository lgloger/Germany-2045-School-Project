const buttonOne = document.getElementById("secondSectionBtnOne");
const buttonTwo = document.getElementById("secondSectionBtnTwo");
const buttonThree = document.getElementById("secondSectionBtnThree");

const secondSectionDescription = document.getElementById(
  "secondSectionDescription"
);

const zuwanderungSlider = document.getElementById("zuwanderungSlider");
const zuwanderungText = document.getElementById("zuwanderungText");

const automatisierungSlider = document.getElementById("automatisierungSlider");
const automatisierungText = document.getElementById("automatisierungText");

const fachkraeftemangelSlider = document.getElementById(
  "fachkraeftemangelSlider"
);
const fachkraeftemangelText = document.getElementById("fachkraeftemangelText");

const arbeitszeitmodelleSlider = document.getElementById(
  "arbeitszeitmodelleSlider"
);
const arbeitszeitmodelleText = document.getElementById(
  "arbeitszeitmodelleText"
);

const optionOneDescription =
  "Deutschland handelt früh: Bildung, Zuwanderung und KI werden gezielt gesteuert. Staat und Wirtschaft investieren gemeinsam, Bürokratie wird abgebaut. Das senkt den Fachkräftemangel deutlich und stabilisiert soziale Systeme.";
const optionTwoDescription =
  "Deutschland setzt Reformen um, aber langsamer und oft kompromissgetrieben. Es gibt Verbesserungen bei Ausbildung und Digitalisierung, jedoch bleiben Engpässe in Pflege und Handwerk spürbar. Die Lage stabilisiert sich, aber nicht überall.Deutschland setzt Reformen um, aber langsamer und oft kompromissgetrieben. Es gibt Verbesserungen bei Ausbildung und Digitalisierung, jedoch bleiben Engpässe in Pflege und Handwerk spürbar. Die Lage stabilisiert sich, aber nicht überall.";
const optionThreeDescription =
  "Reformen werden verschleppt. Bürokratie bleibt hoch, Weiterbildung und Digitalisierung kommen zu spät. Zuwanderung wird nicht aktiv gesteuert, Pflege und Bildung geraten unter Druck. Unternehmen verlagern Aufgaben, soziale Spannungen steigen.";

// ========== Option One ==========
buttonOne.addEventListener("click", optionOne);
buttonTwo.addEventListener("click", optionTwo);
buttonThree.addEventListener("click", optionThree);

function optionOne() {
  buttonOne.classList.add("active");
  buttonTwo.classList.remove("active");
  buttonThree.classList.remove("active");

  secondSectionDescription.textContent = optionOneDescription;

  zuwanderungSlider.style.width = "100%";
  zuwanderungText.textContent = "Hoch / gezielt";

  automatisierungSlider.style.width = "85%";
  automatisierungText.textContent = "Stark (unterstützend)";

  fachkraeftemangelSlider.style.width = "25%";
  fachkraeftemangelText.textContent = "Niedrig";

  arbeitszeitmodelleSlider.style.width = "100%";
  arbeitszeitmodelleText.textContent = "Flexibel";
}

function optionTwo() {
  buttonTwo.classList.add("active");
  buttonOne.classList.remove("active");
  buttonThree.classList.remove("active");

  secondSectionDescription.textContent = optionTwoDescription;

  zuwanderungSlider.style.width = "50%";
  zuwanderungText.textContent = "Mittel";

  automatisierungSlider.style.width = "50%";
  automatisierungText.textContent = "Mittel";

  fachkraeftemangelSlider.style.width = "50%";
  fachkraeftemangelText.textContent = "Mittel";

  arbeitszeitmodelleSlider.style.width = "50%";
  arbeitszeitmodelleText.textContent = "Teilflexibel";
}

function optionThree() {
  buttonThree.classList.add("active");
  buttonOne.classList.remove("active");
  buttonTwo.classList.remove("active");

  secondSectionDescription.textContent = optionThreeDescription;

  zuwanderungSlider.style.width = "20%";
  zuwanderungText.textContent = "Niedrig";

  automatisierungSlider.style.width = "10%";
  automatisierungText.textContent = "Gering / ungleich";

  fachkraeftemangelSlider.style.width = "85%";
  fachkraeftemangelText.textContent = "Hoch";

  arbeitszeitmodelleSlider.style.width = "10%";
  arbeitszeitmodelleText.textContent = "Starr";
}

optionTwo();
