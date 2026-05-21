// Capturando os elementos do HTML
const janela = document.getElementById('janelaImg');
const titulo = document.getElementById('titulo');
const btnReset = document.getElementById('btnReset');

// Variável de controle de estado
let estaQuebrada = false;

// 1. Evento: Mover o mouse sobre a imagem (Abre a janela)
janela.addEventListener('mouseenter', () => {
    if (!estaQuebrada) {
        janela.src = 'aberta.jpg';
        titulo.innerText = 'Janela Aberta';
    }
});

// 2. Evento: Sair com o mouse da imagem (Fecha a janela)
janela.addEventListener('mouseleave', () => {
    if (!estaQuebrada) {
        janela.src = 'fechado.jpg';
        titulo.innerText = 'Janela Fechada';
    }
});

// 3. Evento: Clicar sobre a imagem (Quebra a janela)
janela.addEventListener('click', () => {
    estaQuebrada = true;
    janela.src = 'quebrada.jpg';
    titulo.innerText = 'Janela Quebrada';
    btnReset.style.display = 'inline-block'; // Mostra o botão de consertar
});


// Função bônus para resetar o estado da janela
function consertarJanela() {
    estaQuebrada = false;
    janela.src = 'fechado.jpg';
    titulo.innerText = 'Janela Fechada';
    btnReset.style.display = 'none'; // Esconde o botão novamente
}