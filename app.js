typeDropdown.addEventListener('change', (e) => {
    if(e.target.selectedIndex !== 0){
        type = typeDropdown.selectedIndex-1;
        if(convScripts.indexOf(fileNames[type]) === -1){
            addScript(fileNames[type], 'head');
            convScripts.push(fileNames[type]);
        }
        if(!appScriptAdded) {
            setTimeout(() => {
                setAndUpdateDropdowns({...indices[type]}, container);
                addScript('convertor', 'head');
                appScriptAdded = true;
            }, 10);
        } else{
            setAndUpdateDropdowns({...indices[type]}, container);
        }
    } else {
        removeForm(container);
    }
});

const convert = (val, from, to) => {
    if (type === 0) return convertTemp(val, from, to);
}
