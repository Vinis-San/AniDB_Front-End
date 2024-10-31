// script.js (atualmente não utilizado, mas você pode adicionar funcionalidades no futuro)
document.addEventListener('DOMContentLoaded', () => {
    // Código para futuras funcionalidades pode ser adicionado aqui.
});

 // Seleciona o botão de tema e o body
 const themeButton = document.getElementById('themeButton');
 const body = document.body;

 // Verifica o estado do tema ao carregar a página
 if (localStorage.getItem('darkTheme') === 'true') {
     body.classList.add('dark-theme'); // Adiciona a classe de tema escuro
 }

 // Adiciona um listener para o botão
 themeButton.addEventListener('click', () => {
     body.classList.toggle('dark-theme'); // Alterna a classe de tema escuro
     const isDarkTheme = body.classList.contains('dark-theme');
     localStorage.setItem('darkTheme', isDarkTheme); // Salva o estado do tema no armazenamento local

     // Atualiza o ícone do botão
     themeButton.innerHTML = isDarkTheme ? '🌙' : '☀️'; // Muda o ícone do botão
 });