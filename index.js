const inputEl = document.getElementById("input-el")
const convertButton = document.getElementById("btn")
const lengthParagraph = document.getElementById("length-conversion-txt")
const volumeParagraph = document.getElementById("volume-conversion-txt")
const massParagraph = document.getElementById("mass-conversion-txt")


convertButton.addEventListener("click", function() {
    console.log("event detected")
    let inputValue = inputEl.value

    const lengthFactor = 3.281
    const volumeFactor = 0.264
    const massFactor = 2.205

    let lengthText = `${inputValue} meters = ${inputValue * lengthFactor} feet |
     ${inputValue} feet = ${(inputValue / lengthFactor).toFixed(2)} meters`

    let volumeText = `${inputValue} liters = ${inputValue * volumeFactor} gallons |
     ${inputValue} gallons = ${(inputValue / volumeFactor).toFixed(2)} liters`

    let massText = `${inputValue} kilos = ${inputValue * massFactor} pounds |
     ${inputValue} pounds = ${(inputValue / massFactor).toFixed(2)} kilos`

    lengthParagraph.textContent = lengthText
    volumeParagraph.textContent = volumeText
    massParagraph.textContent = massText
})