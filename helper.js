const addScript = (fileName, position ) => {
    let script = document.createElement("script");
    script.src = `${fileName}.js`;
    if (position === 'head') document.head.appendChild(script);
    if (position === 'body') document.body.appendChild(script);
}

getOptions = (values) => {
    let options = '';
    for(let value in values) options+=`<option class="form-select-option" value="${value}">${value[0].toUpperCase()+value.slice(1)}</option>`;
    return options;
}

setAndUpdateDropdowns = (options, container) => {
    container.classList.remove('hide');
    dropdowns.forEach(dropdown => dropdown.innerHTML = getOptions(options));
    dropdowns.forEach((dropdown, i) => {
        dropdown.options[i].toggleAttribute('selected');
    })
    if(appScriptAdded) updateInputs(0);
}

const removeForm = (container) => {
    container.classList.add('hide');
}
