// Selecionando os botões
const btnProjetos = document.getElementById("btnProjetos");
const btnSobre = document.getElementById("btnSobre");
const btnContato = document.getElementById("btnContato");

// Quando clicar em "Ver Projetos"
btnProjetos.addEventListener("click", function() {
    document.querySelector(".projetos").scrollIntoView({
        behavior: "smooth"
    });
});

// Quando clicar em "Sobre Mim"
btnSobre.addEventListener("click", function() {
    alert("Em breve você vai conhecer mais sobre mim 😎");
});

// Quando clicar em "Contato"
btnContato.addEventListener("click", function() {
    alert("Você pode me chamar no Instagram ou WhatsApp!");
});
