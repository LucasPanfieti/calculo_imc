function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const alturaCm = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const resultado = document.getElementById("resultado");

    if (!nome || isNaN(alturaCm) || isNaN(peso)) {
        resultado.innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const altura = alturaCm / 100;
    const m = peso / (altura ** 2);
    let classificacao = "";

    if (m < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (m < 17) {
        classificacao = "Baixo peso grave";
    } else if (m < 18.50) {
        classificacao = "Baixo peso";
    } else if (m < 25) {
        classificacao = "Peso normal";
    } else if (m < 30) {
        classificacao = "Sobrepeso";
    } else if (m < 35) {
        classificacao = "Obesidade grau I";
    } else if (m < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    resultado.innerText = `${nome} possui índice de massa corporal igual a ${m.toFixed(2)}, sendo classificado como: ${classificacao}`;
}
