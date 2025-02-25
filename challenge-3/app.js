const nameInputs = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");

const ageInput = document.getElementById("ageInput");

const bioInput = document.getElementById("bioInput");


nameInputs.addEventListener("input", function () {
    nameDisplay.textContent = nameInputs.value
})

jobInput.addEventListener("input", function () {
    jobDisplay.textContent = jobInput.value
})

ageInput.addEventListener("input", function () {
    ageDisplay.textContent = ageInput.value
})

bioInput.addEventListener("input", function () {
    bioDisplay.textContent = bioInput.value
})

