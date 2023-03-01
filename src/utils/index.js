export const getCorrectCurrencyInput = (value) => {
    // console.log("value in",value,typeof value)
    // console.log("value replaced",value.replaceAll(",",""),typeof value.replaceAll(",",""))
    return Number.parseFloat(value.replaceAll(",",""))
}

export function getValueFromForm(e,name){
    return e.target.elements[name].value
}