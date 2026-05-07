function escolhaComputador() {
    const random = Math.random();

    if (random < 0.33) {
        return "pedra";
    } else if (random < 0.66) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function determinarVencedor(usuario, computador) {
    if (usuario === computador) {
        return "Empate!";
    }

    if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "tesoura" && computador === "papel") ||
        (usuario === "papel" && computador === "pedra")
    ) {
        return "Você venceu!";
    } else {
        return "Computador venceu!";
    }
}

function jogar(escolhaUsuario) {
    const computador = escolhaComputador();

    document.getElementById("usuario").innerText =
        "Você escolheu: " + escolhaUsuario;

    document.getElementById("computador").innerText =
        "Computador escolheu: " + computador;

    const resultado = determinarVencedor(escolhaUsuario, computador);

    document.getElementById("mensagem").innerText = resultado;
}