let email_usuario;
let nome_usuario;
let id_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    id_usuario = sessionStorage.id_usuario_meuapp;
    
    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        b_id.innerHTML = id_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    sessionStorage.clear();
    redirecionar_login();
}
