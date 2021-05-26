//To store the dropdown values before change
const handleFocus = () => {
    prevDropdowns[0] = dropdowns[0].selectedIndex;
    prevDropdowns[1] = dropdowns[1].selectedIndex;
}

//Caluculate converted value on dropdownChange
const updateInputs = (val) => {
    const inputValue = parseFloat(val);
    let { convertedValue, formula } = convert(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
    inputs[1].value = convertedValue;
    formulaContent.innerHTML = formula;
}

const handleChange = (e) => {
    //If both dropdowns point to same, push the selected dropdown's previous value to be the other dropdown's current value
    if(dropdowns[0].selectedIndex === dropdowns[1].selectedIndex){
        if(e.target.name === 'first-dropdown'){
            dropdowns[1].selectedIndex = prevDropdowns[0];
        } else {
            dropdowns[0].selectedIndex = prevDropdowns[1];
        }
    }
    updateInputs(inputs[0].value);
    handleFocus();   
}

//Calculate the converted value based on the input change and update the other input and formula.
const handleInput = (e) => {
    const inputValue = parseFloat(e.target.value);
    let convertedValue, formula, changeInputIndex;
    if(e.target.name === "first-input") {
        [convertedValue, formula]  = convert(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
        changeInputIndex = 1; 
    } else {
        [convertedValue, formula]  = convert(inputValue, dropdowns[1].selectedIndex, dropdowns[0].selectedIndex);
        changeInputIndex = 0; 
    }
    inputs[changeInputIndex].value = convertedValue;    
    formulaContent.innerHTML = formula;
}

//set defaultValues on the dropdowns and initialise prevDropdowns to store dropdown selected indices before change
const prevDropdowns = dropdowns.map(dropdown => dropdown.selectedIndex);

//Set default input value and formula
inputs[0].value = 0;
updateInputs(inputs[0].value);

//Listen for inputs
inputs[0].addEventListener('input', handleInput);
inputs[1].addEventListener('input', handleInput);

//Listen for dropdowns change
dropdowns[0].addEventListener('change', handleChange);
dropdowns[0].addEventListener('focus', handleFocus);

//Lister for focus on dropdowns.
dropdowns[1].addEventListener('change', handleChange);
dropdowns[1].addEventListener('focus', handleFocus);
