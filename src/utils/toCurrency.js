
const toCurrency = price => {
    var numberFormat = new Intl.NumberFormat('es-ES');
    return numberFormat.format(price)
}

export default toCurrency;