//Fist input group
const colorInput = document.getElementById("color");
const colorBtn = document.getElementById("changeC");
const rootDiv = document.getElementById("root");

function changeColor() {
  const colorValue = colorInput.value;
  if (colorValue === "") {
    alert("Please enter the name of color!");
  } else {
    rootDiv.style.backgroundColor = colorValue;
    colorInput.value = "";
  }
}

colorBtn.addEventListener("click", changeColor);

//Second input group
const textInput = document.getElementById("text");
const textBtn = document.getElementById("changeT");
const textPara = document.getElementById("divText");
function changeText() {
  const textValue = textInput.value;
  if (textValue === "") {
    alert("Please enter the value of text!");
  } else {
    textPara.innerText = textValue;
    textInput.value = "";
  }
}
textBtn.addEventListener("click", changeText);
