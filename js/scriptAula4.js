const vUsuario = "Gabriel";
const vSenha = "123";

function verifica() {
    let txtUsuario = document.getElementById('usuario').value;
    let txtSenha = document.getElementById('senha').value;

    if (txtUsuario.trim() === "") {
        alert("Campo USUÁRIO obrigatório!")
        document.getElementById('usuario').value = "";
        document.getElementById('usuario').focus = "";
        return;
    }
    if (txtSenha.trim() === "") {
        alert("Campo SENHA obrigatório!")
        document.getElementById('senha').value = "";
        document.getElementById('senha').focus = "";
        return;
    }

    if (vUsuario == txtUsuario && vSenha == txtSenha) {
        document.getElementById('resultado').innerHTML = "Login feito com sucesso!";
    } else {
        document.getElementById('resultado').innerHTML = "Usuário ou senhas incorretos!";
    }
}
document.getElementById('verifica').addEventListener('click', verifica);