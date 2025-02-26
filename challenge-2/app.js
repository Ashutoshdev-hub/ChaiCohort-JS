const mainElement = document.getElementById("mainHeading");

const redElement = document.getElementById("redButton");
const greenElement = document.getElementById("greenButton");
const blueElement = document.getElementById("blueButton");
const purpleElement = document.getElementById("purpleButton");
const resetElement = document.getElementById("resetButton");

redElement.addEventListener("click", () => {
  mainElement.style.color = "red";
});
greenElement.addEventListener("click", () => {
  mainElement.style.color = "green";
});
blueElement.addEventListener("click", () => {
  mainElement.style.color = "blue";
});
purpleElement.addEventListener("click", () => {
  mainElement.style.color = "purple";
});
resetElement.addEventListener("click", () => {
  mainElement.style.color = "black";
});
