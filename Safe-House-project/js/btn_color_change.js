let wifiBtn = document.getElementById("wifi-icon");
let thermoBtn = document.getElementById("thermo-icon");
let bulbBtn = document.getElementById("bulb-icon");

// get the original background colors of the buttons
let wifiOriginalColor = getComputedStyle(wifiBtn).backgroundColor;
let thermoOrginalColor = getComputedStyle(thermoBtn).backgroundColor;
let bulbOriginalColor = getComputedStyle(bulbBtn).backgroundColor;

let isClicked = false;

const colorChange = (btn, originalColor) => {
  // check if button is clicked
  isClicked = !isClicked;
  console.log("Button Clicked" + isClicked);
  // if button click is true change color, if false back to original color
  isClicked === true
    ? (btn.style.backgroundColor = "#2A5C95")
    : (btn.style.backgroundColor = originalColor);
};

// EventListeners

wifiBtn.addEventListener("click", () =>
  colorChange(wifiBtn, wifiOriginalColor)
);

thermoBtn.addEventListener("click", () =>
  colorChange(thermoBtn, thermoOrginalColor)
);

bulbBtn.addEventListener("click", () =>
  colorChange(bulbBtn, bulbOriginalColor)
);

export { colorChange };
