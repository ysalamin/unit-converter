/**
 * @file Unit converter application script.
 * Handles user input from a text field, performs conversions for length,
 * volume, and mass, and updates the DOM to display the results.
 */

// --- CONSTANTS & DOM ELEMENTS ---

// Conversion factors
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.205;

// Get references to DOM elements
const inputEl = document.getElementById("input-el");
const convertButton = document.getElementById("btn");
const lengthParagraph = document.getElementById("length-conversion-txt");
const volumeParagraph = document.getElementById("volume-conversion-txt");
const massParagraph = document.getElementById("mass-conversion-txt");

// --- FUNCTIONS ---

/**
 * Generates a formatted string for a given unit conversion.
 * @param {number} value - The input value to convert.
 * @param {number} factor - The conversion factor.
 * @param {string} unit1 - The name of the base unit (e.g., "meters").
 * @param {string} unit2 - The name of the unit to convert to (e.g., "feet").
 * @returns {string} The formatted conversion string, rounded to 3 decimal places.
 */
function generateConversionText(value, factor, unit1, unit2) {
    const conversion1 = (value * factor).toFixed(3);
    const conversion2 = (value / factor).toFixed(3);
    return `${value} ${unit1} = ${conversion1} ${unit2} | ${value} ${unit2} = ${conversion2} ${unit1}`;
}

// --- EVENT LISTENERS ---

/**
 * Handles the click event on the main convert button.
 * It reads the input, validates it, and triggers the display of all conversions.
 */
convertButton.addEventListener("click", function() {
    // Get and parse the input value to a number
    const inputValue = parseFloat(inputEl.value);
    
    // Validate input: if it's not a number or is empty, do nothing.
    if (!inputValue) {
        return;
    }

    // Generate and display the text for each conversion type
    lengthParagraph.textContent = generateConversionText(inputValue, METER_TO_FEET, "meters", "feet");
    volumeParagraph.textContent = generateConversionText(inputValue, LITER_TO_GALLON, "liters", "gallons");
    massParagraph.textContent = generateConversionText(inputValue, KILO_TO_POUND, "kilos", "pounds");
});