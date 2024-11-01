const bookListContainer = document.getElementById("bookList");
const bookTipsContainer = document.getElementById("bookTips");
let currentPage = 1;
const pageSize = 16; // Exibindo inicialmente 16 livros

// Função para buscar livros em francês automaticamente
async function fetchInitialFrenchBooks() {
    const url = `https://openlibrary.org/subjects/french.json?limit=${pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.works;
}

// Exibe os livros na tela
function displayBooks(books) {
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.authors ? book.authors[0].name : 'Desconhecido'}</p>
            <a href="https://www.google.com/search?tbm=shop&q=${encodeURIComponent(book.title)}" target="_blank">Comprar</a>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

// Carrega os livros iniciais em francês ao carregar a página
async function loadInitialFrenchBooks() {
    const books = await fetchInitialFrenchBooks();
    displayBooks(books);
}

// Exibe dicas de livros
function displayBookTips() {
    const tips = [
        { title: "Livraria Cultura", link: "https://www.livrariacultura.com.br/", description: "Encontre uma vasta seleção de livros!" },
        { title: "Saraiva", link: "https://www.saraiva.com.br/", description: "Aproveite as ofertas imperdíveis!" },
        { title: "Leia Clássicos", link: "https://www.livrariacultura.com.br/", description: "Explore clássicos franceses como 'Le Petit Prince'!" }
    ];

    tips.forEach(tip => {
        const tipItem = document.createElement('div');
        tipItem.className = 'tip-item';
        tipItem.innerHTML = `
            <h4>${tip.title}</h4>
            <p>${tip.description}</p>
            <a href="${tip.link}" target="_blank">Saiba mais</a>
        `;
        bookTipsContainer.appendChild(tipItem);
    });
}

// Inicializa a página
window.onload = function() {
    loadInitialFrenchBooks();
    displayBookTips();
};
