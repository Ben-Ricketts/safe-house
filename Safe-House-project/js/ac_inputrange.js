let rangeInput = document.getElementById("acRangeInput");
let rangeNumber = document.getElementById("acRangeNumber");
let rangeThumb = document.getElementById("acRangeThumb");

let acRangeInputSlider = () => {
  rangeNumber.textContent = rangeInput.value + "C";

  let thumbPosition =
    ((rangeInput.max - rangeInput.value) / rangeInput.max) * 100;
  thumbPosition = Math.min(thumbPosition, 99);
  rangeThumb.style.right = thumbPosition + "%";
  console.log(thumbPosition);
};

rangeInput.addEventListener("input", acRangeInputSlider);

export { acRangeInputSlider };
