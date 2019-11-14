var operacao;
var n;
var n1;
var resultado;


function calcular() {
    if(resultado == null){
        var valor1 = parseFloat(n1);
    } else {
        var valor1 = resultado;
    }
    var valor2 = parseFloat(n);
    switch (operacao) {
        case '*' :
            resultado = valor1 * valor2;
            break;
        case '-' :
            resultado = valor1 - valor2;
            break;
        case '+' :
            resultado = valor1 + valor2;
            break;
        case '/' :
            resultado = valor1 / valor2;
            break;
        case '%' :
            resultado =  valor1 * (valor2 / 100);
    } 

    document.getElementById("inputTela").value = resultado;
}

function salvarOperacao(botao) {
    operacao = botao.value;
    n1 = n;
    limpar("nao");
}

function digitaNum(numero) {
    var input = document.getElementById("inputTela").value;

    if(input !== "0" ) {
        if(numero.value === "." && input.includes(".") === false) {
            n = input.concat(numero.value);
        } else if (numero.value !== ".") {
            n = input.concat(numero.value);
        }
    }  else {
        n = numero.value;
    }
    
    document.getElementById("inputTela").value = n;
}

function limpar(modo) {
    if(modo.value === "AC") {
        document.getElementById("inputTela").value = "0";
        resultado = null;
    } else {
        document.getElementById("inputTela").value = "";
    }
}