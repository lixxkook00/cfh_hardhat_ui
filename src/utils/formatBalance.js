export default function FormatAmount(amount,decimals) {
    if(amount === "0"){
        return "0"
    }
    else
    {
        const currentAmount = Number.parseInt(amount.slice(0,-decimals));
    
        const result = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(parseFloat(currentAmount).toFixed(6));
    
        return result.replace("€","") || "0"
    }
}