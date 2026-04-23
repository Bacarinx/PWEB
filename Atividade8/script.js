let pessoas = [];

// Adicionar pessoa
function adicionar() {
    if (pessoas.length >= 45) {
        alert("Limite de 45 pessoas atingido!");
        return;
    }

    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = Number(document.getElementById("opiniao").value);

    // validação
    if (!idade || idade <= 0 || !sexo || !opiniao) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    pessoas.push({ idade, sexo, opiniao });

    document.getElementById("contador").innerText =
        `Pessoas cadastradas: ${pessoas.length}/45`;

    // limpar campos
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";
}

// Calcular resultados
function calcular() {
    if (pessoas.length === 0) {
        alert("Nenhuma pessoa cadastrada!");
        return;
    }

    let somaIdade = 0;
    let maior = pessoas[0].idade;
    let menor = pessoas[0].idade;

    let qtdPessimo = 0;
    let qtdOtimoBom = 0;

    let mulheres = 0;
    let homens = 0;
    let outros = 0;

    for (let i = 0; i < pessoas.length; i++) {
        let p = pessoas[i];

        somaIdade += p.idade;

        if (p.idade > maior) maior = p.idade;
        if (p.idade < menor) menor = p.idade;

        if (p.opiniao === 1) qtdPessimo++;

        if (p.opiniao === 3 || p.opiniao === 4) {
            qtdOtimoBom++;
        }

        if (p.sexo === "F") mulheres++;
        else if (p.sexo === "M") homens++;
        else outros++;
    }

    let media = somaIdade / pessoas.length;
    let porcentagem = (qtdOtimoBom / pessoas.length) * 100;

    document.getElementById("resultadoPesquisa").innerText =
`RESULTADOS:

Média das idades: ${media.toFixed(2)}
Maior idade: ${maior}
Menor idade: ${menor}
Quantidade que respondeu péssimo: ${qtdPessimo}
Porcentagem ótimo/bom: ${porcentagem.toFixed(2)}%
Mulheres: ${mulheres}
Homens: ${homens}
Outros: ${outros}`;
}