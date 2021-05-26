getElements = (className) => {
    const elements = Array.from(document.querySelectorAll(className));
    return elements.length > 1 ? elements : elements[0];
}

const inputs = getElements('.form-input');
const dropdowns = getElements('.form-dropdown');
const formulaContent = getElements(".formula-content");
const container = getElements('.form-content');
const typeDropdown = getElements('.type-dropdown');

//constants and reusable values
const indices = [
    {
        'celsius': 0,
        'fahrenheit': 1,
        'kelvin': 2
    }
]

const fileNames = ['temparatureConversion', 'lengthConversion'];

let type = typeDropdown.selectedIndex-1;
let appScriptAdded = false;
let convScripts = [];