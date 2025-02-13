//Celsius para Fahrenheit
function conversaoCelsiusFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert("Por favor, insira um valor válido em Celsius.");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultadoCelsiusFahrenheit').innerHTML = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}

//Metros para Centímetros
function conversaoMetrosCentimetros() {
    const metros = parseFloat(document.getElementById('metros').value);
    if (isNaN(metros)) {
        alert("Por favor, insira um valor válido em metros.");
        return;
    }
    const centimetros = metros * 100;
    document.getElementById('resultadoMetrosCentimetros').innerHTML = `${metros} metros é igual a ${centimetros} centímetros`;
}

//Quilos para Libras
function conversaoQuilosLibras() {
    const quilos = parseFloat(document.getElementById('quilos').value);
    if (isNaN(quilos)) {
        alert("Por favor, insira um valor válido em quilos.");
        return;
    }
    const libras = quilos * 2.20462;
    document.getElementById('resultadoQuilosLibras').innerHTML = `${quilos} quilos é igual a ${libras.toFixed(2)} libras`;
}
