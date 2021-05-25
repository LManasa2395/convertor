const inputs = [document.querySelector('#first-input'), document.querySelector('#second-input')];
const dropdowns = [document.querySelector(".first-dropdown"), document.querySelector(".second-dropdown")];
const formulaContent = document.querySelector(".formula-content");

const prevDropdowns = [tempDropdownIndices[dropdowns[0].value], tempDropdownIndices[dropdowns[1].value]];

//Update the formula span
updateFormula = (formula) => {
    formulaContent.innerHTML = formula;
}

//Set default input value and formula
inputs[0].value = 0;
let initialConvert =  convert(inputs[0].value, prevDropdowns[0], prevDropdowns[1])
inputs[1].value = initialConvert.convertedValue;
updateFormula(initialConvert.formula);

//To store the dropdown values before change
const handleFocus = () => {
    prevDropdowns[0] = dropdowns[0].selectedIndex;
    prevDropdowns[1] = dropdowns[1].selectedIndex;
}

const handleChange = (e) => {
    //If both dropdowns point to same, push the selected dropdown's previous value to be the other dropdown's current value
    if(dropdowns[0].selectedIndex === dropdowns[1].selectedIndex){
        if(e.target.name === '1'){
            dropdowns[1].selectedIndex = prevDropdowns[0];
        } else {
            dropdowns[0].selectedIndex = prevDropdowns[1];
        }
    }
    //Caluculate converted value on dropdownChange
    const inputValue = parseFloat(inputs[0].value);
    let { convertedValue, formula } = convert(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
    inputs[1].value = convertedValue;
    updateFormula(formula);
    handleFocus();   
}

//Calculate the converted value based on the input change and update the other input and formula.
const handleInput = (e) => {
    const inputValue = parseFloat(e.target.value);
    let result, changeInputIndex;
    if(e.target.name === "first-input") {
        result  = convert(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
        changeInputIndex = 1; 
    } else {
        result  = convert(inputValue, dropdowns[1].selectedIndex, dropdowns[0].selectedIndex);
        changeInputIndex = 0; 
    }
    inputs[changeInputIndex].value = result.convertedValue;
    updateFormula(result.formula);
}

//Listen for inputs
inputs[0].addEventListener('input', handleInput);
inputs[1].addEventListener('input', handleInput);

//Listen for dropdowns change
dropdowns[0].addEventListener('change', handleChange);
dropdowns[0].addEventListener('focus', handleFocus);

//Lister for focus on dropdowns.
dropdowns[1].addEventListener('change', handleChange);
dropdowns[1].addEventListener('focus', handleFocus);
