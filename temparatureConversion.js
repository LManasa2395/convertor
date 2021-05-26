const celsiusToFahrenheit = temp => {
    const convertedValue = (temp* 9 / 5) + 32 || "";
    temp = temp || "";
    return { convertedValue, formula: `(${temp}<strong>°C</strong>* 9 / 5) + 32 = ${convertedValue}<strong>°F</strong>` };
}

const fahrenheitToCelcius = temp => {
   const convertedValue = ((temp- 32) * 5 / 9) || "";
   temp = temp || "";
    return { convertedValue, formula: `(${temp}<strong>°F</strong>- 32) * 5 / 9 = ${convertedValue}<strong>°C</strong>` };
}

const celsiusToKelvin = temp => {
    const convertedValue = temp + 273.15 || "";
    temp = temp || "";
    return { convertedValue, formula: `${temp}<strong>°C</strong> + 273.15 = ${convertedValue}<strong>°K</strong>` };
}

const kelvinToCelcius = temp => {
    const convertedValue = temp - 273.15 || "";
    temp = temp || "";
    return { convertedValue, formula: `${temp}<strong>°K</strong> - 273.15 = ${convertedValue}<strong>°C</strong>` };
}

const fahrenheitToKelvin = temp => {
    const convertedValue = ((temp - 32) * 5)/9 + 273.15 || "";
    temp = temp || "";
    return { convertedValue, formula: `(${temp}<strong>°F</strong>- 32) * 5/9 + 273.15 = ${convertedValue}<strong>°K</strong>` };
}

const kelvinToFahrenheit = temp => {
    const convertedValue = ((temp - 273.15) * 9)/5 + 32 || "";
    temp = temp || "";
    return { convertedValue, formula: `(${temp}<strong>°K</strong> - 273.15)* 9 / 5 + 32 = ${convertedValue}<strong>°F</strong>` };
}

const convertTemp = (temp, from, to) => {
    if (from === 0) {
        if (to === 1) return celsiusToFahrenheit(temp);
        if (to === 2) return celsiusToKelvin(temp);
    } else if (from === 1) {
        if (to === 0) return fahrenheitToCelcius(temp);
        if (to === 2) return fahrenheitToKelvin(temp);
    } else {
        if(to === 0) return kelvinToCelcius(temp);
        if (to === 1) return kelvinToFahrenheit(temp);
    }
}