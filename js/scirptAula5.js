let usuarios = []; // Array para armazenar os dados dos usuários
let editIndex = -1;

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Previne o comportamento default do submit

    // pega os valores do formulario
    let nome = document.getElementById("nome").value; 
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let termos = document.getElementById("termos").checked;

    // verifica se foram digitados dados no formulario
    if(!nome || !email || !idade || !sexo || !termos){
        alert("Preencha todos os campos!");
        return;
    }

    // cria um objeto dados com os dados do formulario
    let dados = {
        nome: nome,
        email: email,
        idade: idade,
        sexo: sexo,
        termos: termos
    };

    //INCLUI DADOS NO ARRAY
    if (editIndex != -1) {
        usuarios[editIndex] = dados;
        editIndex = -1;
    } else {
        usuarios.push(dados);
    }

    exibir();
});

//Função para exibir os dados do array usuarios
function exibir(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    usuarios.forEach((user, index) => {
        let item = `<li>
        ${user.nome} - ${user.email} - ${user.idade} - ${user.sexo} - ${user.termos}
        <button class="editar" onClick="editar(${index})">Editar</button>
        <button class="excluir" onClick="excluir(${index})">Excluir</button>
        </li>`;
        resultado.innerHTML += item;
    });
}

function excluir(index){
    if (confirm("Deseja realmente excluir esse registro?")){
        usuarios.splice(index, 1); //splice alem de excluir indice atual, arruma o array reoordenando-o.
        exibir();
    }
}

function editar(index){
    let user = usuarios[index];
    // pega os valores do formulario
    document.getElementById("nome").value = user.nome; 
    document.getElementById("email").value = user.email;
    document.getElementById("idade").value = user.idade;
    document.getElementById("sexo").value = user.sexo;
    document.getElementById("termos").checked = user.termos;
    editIndex = index;
}