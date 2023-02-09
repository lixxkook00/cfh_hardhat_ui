import React, { useEffect, useRef, useState } from 'react'
import { getCorrectCurrencyInput } from '../../utils';

export default function CurrencyInput({typeInput,classInput,idInput,placeholderInput}) {
  const valueRef = useRef();
  const [value,setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const formatCurrency = (newValue) => {
    const [formattedWholeValue, decimalValue = "0"] = newValue.split(".");
    const signifantValue = formattedWholeValue.replace(/,/g, "");
    
    const floatValue = parseFloat(
        signifantValue + "." + decimalValue.slice(0, 2)
    );

    if (isNaN(floatValue) === false) {
        let n = new Intl.NumberFormat("en-EN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(floatValue);

        if (newValue.includes(".") && !n.includes(".")) {
            return n + ".";
        }
        return n;
    }

    return "0";
  }

  return (
    <input
        type={typeInput}
        className={classInput}
        id={idInput}
        placeholder={placeholderInput}
        value={value}
        ref={valueRef}
        
        // pattern="d+(.d{2})?"

        onChange={(e) => setValue(formatCurrency(e.target.value))}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
    />
  )
}
