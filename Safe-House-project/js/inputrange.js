let rangeInput = document.getElementById("rangeInput");
let rangeNumber = document.getElementById("rangeNumber");
let rangeThumb = document.getElementById("rangeThumb");

let rangeInputSlider = () => {
  rangeNumber.textContent = rangeInput.value + "W";

  let thumbPosition =
    ((rangeInput.max - rangeInput.value) / rangeInput.max) * 100;
  thumbPosition = Math.min(thumbPosition, 99);
  rangeThumb.style.right = thumbPosition + "%";
  console.log(thumbPosition);
};

rangeInput.addEventListener("input", rangeInputSlider);

export { rangeInputSlider };
