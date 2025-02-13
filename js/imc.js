function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com o peso normal.`;
    } else if (imc >= 25 && imc < 29.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
    } else if (imc >= 30 && imc < 34.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 1.`;
    } else if (imc >= 35 && imc < 39.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 2.`;
    } else {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 3 (obesidade mórbida).`;
    }

    document.getElementById('resultado').textContent = resultado;
}

function resetarCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
}
