function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function executarMaior() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);

    document.getElementById("res1").innerText =
        "Maior: " + maiorNumero(a, b, c);
}


function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function executarOrdenar() {
    let a = Number(document.getElementById("o1").value);
    let b = Number(document.getElementById("o2").value);
    let c = Number(document.getElementById("o3").value);

    document.getElementById("res2").innerText =
        "Ordem: " + ordenarNumeros(a, b, c);
    }

function ehPalindromo(texto) {
    if (!texto) return false;

    let tratado = texto.toLowerCase().replace(/\s+/g, '');
    let invertido = tratado.split('').reverse().join('');

    return tratado === invertido;
}

function executarPalindromo() {
    let texto = document.getElementById("texto").value;

    let resultado = ehPalindromo(texto)
        ? "É palíndromo"
        : "Não é palíndromo";

    document.getElementById("res3").innerText = resultado;
}

function verificarSubconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";

    return p1.includes(p2)
        ? "é um subconjunto"
        : "não é um subconjunto";
}

function executarSubconjunto() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    document.getElementById("res4").innerText =
        verificarSubconjunto(p1, p2);
}


function diaDaSemana(data) {
    let dias = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    let d = new Date(data);

    if (isNaN(d)) return "Data inválida";

    return dias[d.getDay()];
}

function executarData() {
    let data = document.getElementById("data").value;

    document.getElementById("res5").innerText = diaDaSemana(data);
}