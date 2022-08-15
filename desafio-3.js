// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma) {
    var saldo = Number(campoSaldo.innerHTML) + soma;
    campoSaldo.innerHTML = '' + saldo;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    var valor = Number(soma.value);
    somarAoSaldo(valor);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
