// Função para enviar os dados e armazená-los no localStorage
function enviar(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os dados dos campos do formulário
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let mensage = document.getElementById("mensage").value;

    if(email.includes("@")){//verifica se o emai é válido
        // Armazena os dados no localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('number', number);
        localStorage.setItem('mensage', mensage);
        // Redireciona para a página "dados.html"
        window.location.href = 'dados.html';
    }
    else{
        alert("Insira um email válido")
    }
}

// Adiciona o evento de submit ao formulário
document.getElementById("contact-form").addEventListener("submit", submit);