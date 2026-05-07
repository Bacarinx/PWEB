// ==========================================
// EXERCÍCIO 1: RETÂNGULO
// ==========================================
class Retangulo {
    constructor(x, y) {
        this.base = x;
        this.altura = y;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}

function executarRetangulo() {
    // Captura os valores dos inputs do HTML
    const baseVal = parseFloat(document.getElementById('base').value);
    const alturaVal = parseFloat(document.getElementById('altura').value);

    // Validação simples
    if (isNaN(baseVal) || isNaN(alturaVal)) {
        document.getElementById('res-retangulo').innerHTML = "⚠️ Por favor, digite valores válidos.";
        return;
    }

    // Cria o objeto e executa o método
    const meuRetangulo = new Retangulo(baseVal, alturaVal);
    
    // Mostra o resultado na tela
    document.getElementById('res-retangulo').innerHTML = `<strong>Sucesso!</strong>\nA área calculada do retângulo é: <strong>${meuRetangulo.calcularArea()}</strong>`;
}


// ==========================================
// EXERCÍCIO 2: CLASSES, HERANÇA E GET/SET
// ==========================================
class Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroDaConta = numeroDaConta;
        this._saldo = saldo;
    }
    get nomeCorrentista() { return this._nomeCorrentista; }
    get banco() { return this._banco; }
    get numeroDaConta() { return this._numeroDaConta; }
    get saldo() { return this._saldo; }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    get saldoEspecial() { return this._saldoEspecial; }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }
    get juros() { return this._juros; }
    get dataVencimento() { return this._dataVencimento; }
}

// Função auxiliar para capturar dados comuns do formulário
function obterDadosForm() {
    return {
        nome: document.getElementById('correntista').value,
        banco: document.getElementById('banco').value,
        numero: document.getElementById('numero').value,
        saldo: parseFloat(document.getElementById('saldo').value) || 0
    };
}

// Ações dos botões para criar os objetos e exibir os dados com os Getters
function criarContaCorrente() {
    const dados = obterDadosForm();
    if(!dados.nome) return alert("Digite pelo menos o nome do correntista.");

    // Simulando um valor fixo de Saldo Especial exigido pelo exercício
    const saldoEspecialSimulado = 2000; 

    // Instanciando a classe filha Corrente
    const cc = new Corrente(dados.nome, dados.banco, dados.numero, dados.saldo, saldoEspecialSimulado);

    // Renderizando na tela usando os métodos 'get'
    document.getElementById('res-conta').innerHTML = `
        <strong>TIPO: CONTA CORRENTE</strong>
        • Correntista: ${cc.nomeCorrentista}
        • Banco: ${cc.banco}
        • Conta: ${cc.numeroDaConta}
        • Saldo: R$ ${cc.saldo.toFixed(2)}
        • Saldo Especial: R$ ${cc.saldoEspecial.toFixed(2)}
    `;
}

function criarContaPoupanca() {
    const dados = obterDadosForm();
    if(!dados.nome) return alert("Digite pelo menos o nome do correntista.");

    // Simulando Juros e Data de Vencimento fixos para o exemplo
    const jurosSimulado = "0.65% a.m.";
    const vencimentoSimulado = "10/06/2026";

    // Instanciando a classe filha Poupanca
    const cp = new Poupanca(dados.nome, dados.banco, dados.numero, dados.saldo, jurosSimulado, vencimentoSimulado);

    // Renderizando na tela usando os métodos 'get'
    document.getElementById('res-conta').innerHTML = `
        <strong>TIPO: CONTA POUPANÇA</strong>
        • Correntista: ${cp.nomeCorrentista}
        • Banco: ${cp.banco}
        • Conta: ${cp.numeroDaConta}
        • Saldo: R$ ${cp.saldo.toFixed(2)}
        • Taxa Juros: ${cp.juros}
        • Vencimento: ${cp.dataVencimento}
    `;
}