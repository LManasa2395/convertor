let inputs = [document.getElementById('first-input'), document.getElementById('second-input')];
const dropdowns = [document.querySelector('.first-dropdown'), document.querySelector('.second-dropdown')];
let prevs =  [0, 1] //[dropdowns[0].selectedIndex, dropdowns[1].selectedIndex];

inputs[0].value = 0;
inputs[1].value = convertInput(inputs[0].value, prevs[0], prevs[1]);

const setPrevs = function() {
    prevs[0] = dropdowns[0].selectedIndex;
    prevs[1] = dropdowns[1].selectedIndex;
}

const handleDropdownChange = (e) => {
    if (dropdowns[0].selectedIndex === dropdowns[1].selectedIndex) {
        if(e.target.name === "1"){
            dropdowns[1].selectedIndex = prevs[0];
        } else{
            dropdowns[0].selectedIndex = prevs[1];
        }
    }
    setPrevs();
    const inputValue = parseFloat(inputs[0].value);
    inputs[1].value = convertInput(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
}

dropdowns[0].addEventListener('change', handleDropdownChange);
dropdowns[1].addEventListener('change', handleDropdownChange);
dropdowns[0].addEventListener('focus', setPrevs);
dropdowns[1].addEventListener('focus', setPrevs);

const handleInput = e => {
    const inputValue = parseFloat(e.target.value);
    console.log();
    let convertedValue, changeInputIndex;
    if(e.target.name === "first-input"){
        convertedValue = convertInput(inputValue, dropdowns[0].selectedIndex, dropdowns[1].selectedIndex);
        changeInputIndex = 1;
    }else{
        convertedValue = convertInput(inputValue, dropdowns[1].selectedIndex, dropdowns[0].selectedIndex);
        changeInputIndex = 0;
    }
    inputs[changeInputIndex].value = convertedValue;
}

// Listen for Inputs
inputs[0].addEventListener('input', handleInput);
inputs[1].addEventListener('input', handleInput);


//(<span class="celsius">0</span><strong>°C</strong> × 9/5) + 32 = <span class="fahrenheit">32</span><strong>°F</strong>