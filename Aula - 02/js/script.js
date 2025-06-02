function calcular() {
    let Peso = Number(document.getElementById("Peso").value);
    let Altura = Number(document.getElementById("Altura").value);
    let resultado = document.getElementById("resultado");

    let imc = Peso / (Altura * Altura)

    if (imc < 18.6) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2)+ "abaixo do peso";

    }
    else if (imc >= 18.6 && imc < 25) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2) + "peso ideal";

    }
    else if (imc > 25 && imc < 30) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2) + "levemente acima do peso";

    }
    else if (imc > 30 && imc < 35) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2) + "obesidade grau 1";

    }
    else if (imc > 40 && imc < 40) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2) + "obesidade grau 2";

    }
    else if (imc > 40 && imc < 40) {
        resultado.innerHTML = "Seu IMC e: " + imc.toFixed(2) + "obesidade grau 3";

    }


}
