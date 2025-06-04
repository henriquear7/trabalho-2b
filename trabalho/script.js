// Mostrar/ocultar
function mostrarSecao(id) {
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => secao.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// 1. Triângulo
function verificarTriangulo() {
    const x = Number(document.getElementById('ladoX').value);
    const y = Number(document.getElementById('ladoY').value);
    const z = Number(document.getElementById('ladoZ').value);
    const resultado = document.getElementById('resultadoTriangulo');

    if (x + y > z && x + z > y && y + z > x) {
        if (x === y && y === z) {
            resultado.textContent = 'Triângulo equilátero';
        } else if (x === y || x === z || y === z) {s
            resultado.textContent = 'Triângulo isósceles';
        } else {
            resultado.textContent = 'Triângulo escaleno';
        }
    } else {
        resultado.textContent = 'Não é um triângulo';
    }
}

// 2. IMC
function calcularIMC() {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade grau 1';
    else if (imc < 40) classificacao = 'Obesidade grau 2';
    else classificacao = 'Obesidade grau 3';

    document.getElementById('resultadoIMC').textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

// 3. Impostos
function calcularImposto() {
    const ano = Number(document.getElementById('anoCarro').value);
    const valor = Number(document.getElementById('valorCarro').value);
    const taxa = ano < 1990 ? 0.01 : 0.015;
    const imposto = valor * taxa;
    document.getElementById('resultadoImposto').textContent = `Imposto a pagar: R$ ${imposto.toFixed(2)}`;
}

// 4. Salário
function calcularSalario() {
    const salario = Number(document.getElementById('salarioAtual').value);
    const codigo = Number(document.getElementById('codigoCargo').value);
    let percentual = 0;
    if (codigo === 101) percentual = 0.1;
    else if (codigo === 102) percentual = 0.2;
    else if (codigo === 103) percentual = 0.3;
    else percentual = 0.4;

    const novoSalario = salario + salario * percentual;
    const diferenca = novoSalario - salario;
    document.getElementById('resultadoSalario').textContent = `Novo salário: R$ ${novoSalario.toFixed(2)} (Diferença: R$ ${diferenca.toFixed(2)})`;
}

// 5. Crédito
function calcularCredito() {
    const saldo = Number(document.getElementById('saldoMedio').value);
    let percentual = 0;
    if (saldo >= 201 && saldo <= 400) percentual = 0.2;
    else if (saldo <= 600) percentual = 0.3;
    else if (saldo > 600) percentual = 0.4;
    const credito = saldo * percentual;
    document.getElementById('resultadoCredito').textContent = `Crédito: R$ ${credito.toFixed(2)}`;
}

// 6. Lanchonete
function calcularLanche() {
    const codigo = Number(document.getElementById('codigoLanche').value);
    const quantidade = Number(document.getElementById('quantidadeLanche').value);
    let preco = 0;
    if (codigo === 100) preco = 11;
    else if (codigo === 101) preco = 8.5;
    else if (codigo === 102) preco = 8;
    else if (codigo === 103) preco = 9;
    else if (codigo === 104) preco = 10;
    else if (codigo === 105) preco = 4.5;

    const total = preco * quantidade;
    document.getElementById('resultadoLanche').textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
}

// 7. Vendas
function calcularVenda() {
    const preco = Number(document.getElementById('precoVenda').value);
    const codigo = document.getElementById('codigoVenda').value;
    let total = preco;

    if (codigo === 'a') total *= 0.9;
    else if (codigo === 'b') total *= 0.85;
    else if (codigo === 'd') total *= 1.1;

    document.getElementById('resultadoVenda').textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
}

// 8. Pagamento
function calcularPagamento() {
    const nivel = Number(document.getElementById('nivelProfessor').value);
    const horas = Number(document.getElementById('horasAula').value);
    let valorHora = 0;

    if (nivel === 1) valorHora = 12;
    else if (nivel === 2) valorHora = 17;
    else if (nivel === 3) valorHora = 25;

    const salario = valorHora * horas * 4.5;
    document.getElementById('resultadoPagamento').textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
}