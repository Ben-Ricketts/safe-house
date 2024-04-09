let LightsPowerBtn = document.getElementById("lights-power-btn");
let tempPowerBtn = document.getElementById("temp-power-btn");

let lightsPowerBtnOriginalColor =
  getComputedStyle(LightsPowerBtn).backgroundColor;
let tempPowerBtnOriginalColor = getComputedStyle(tempPowerBtn).backgroundColor;

let LightsclickedOn = false;
let tempClickedOn = false;

const PowerBtnColorChange = (btn, originalColor, clickedOn) => {
  clickedOn = !clickedOn;

  clickedOn === true
    ? (btn.style.background = "linear-gradient(to bottom, #2F3260, #0A0C19)")
    : (btn.style.background = originalColor);

  return clickedOn;
};

LightsPowerBtn.addEventListener("click", () => {
  LightsclickedOn = PowerBtnColorChange(
    LightsPowerBtn,
    lightsPowerBtnOriginalColor,
    LightsclickedOn
  );
});

tempPowerBtn.addEventListener("click", () => {
  tempClickedOn = PowerBtnColorChange(
    tempPowerBtn,
    tempPowerBtnOriginalColor,
    tempClickedOn
  );
});

export { PowerBtnColorChange };
