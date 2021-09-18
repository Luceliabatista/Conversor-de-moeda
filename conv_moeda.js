function ConversorDolar() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmDolar = valorEmReal / 5;

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = `O valor convertido em Dolar é ${valorEmDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}`;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConversorEuro() {
    let valorElemento2 = document.getElementById("valor");
    let valor2 = valorElemento2.value;
    let valorEmReal2 = parseFloat(valor2);

    let valorEmEuro = valorEmReal2 / 6;

    let elementoValorConvertido2 = document.getElementById("valorConvertido2");
    let valorConvertido2 = `O valor digitado em Euro é ${valorEmEuro.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' })}`;
    elementoValorConvertido2.innerHTML = valorConvertido2

}

function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';
}