//função para exibir mensagem
function exibirMensagem() {
    alert("Bem vindo ao meu site!")
}

// Executador
//Pega o elemento pelo id (botao no caso). adiciona um evento ao clicar, adicionando a função acima

// aula 3
function compara() {
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    let resultado1;

    if (n1 == n2) {
        resultado1 = "VERDADEIRO (São iguais)";
    } else {
        resultado1 = "FALSO (São diferentes)";
    }

    document.getElementById("resultado1").innerHTML = resultado1;
}

// Ouvinte do botão de comparação
document.getElementById("btnCompara").addEventListener("click", compara);


// --- FUNÇÃO 2: VERIFICAR IDADE ---
function verificaIdade() {
    let idadeUsuario = document.getElementById("idadeUsuario").value;
    let idadeMinima = 18;
    let resultado2;

    if (idadeUsuario >= idadeMinima) {
        resultado2 = "ACESSO LIBERADO, usuário de maior idade";
    } else {
        resultado2 = "ACESSO NEGADO, usuário de menor idade";
    }

    document.getElementById("resultado2").innerHTML = resultado2;
}

// Ouvinte do botão de verificação
document.getElementById("verificar").addEventListener("click", verificaIdade);