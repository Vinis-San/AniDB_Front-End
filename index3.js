const bookListContainer = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const downloadableFilter = document.getElementById("downloadable");
const bookModal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalCover = document.getElementById("modalCover");
const modalAuthor = document.getElementById("modalAuthor");
const modalDescription = document.getElementById("modalDescription");
const modalDownloadButton = document.getElementById("modalDownloadButton");

// Função principal para buscar livros de cada idioma ao carregar a página
async function fetchInitialBooks() {
    await fetchBooks('', 'en');
    await fetchBooks('', 'fr');
}

// Função para buscar livros com parâmetros opcionais
async function fetchBooks(query = '', language = '') {
    let url = `https://openlibrary.org/search.json?limit=20${query ? `&q=${encodeURIComponent(query)}` : ''}`;
    if (language) url += `&language=${language === 'en' ? 'eng' : 'fre'}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayBooks(data.docs, language);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

// Função para exibir os livros na tela
function displayBooks(books, language) {
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = `book-item ${language}`;
        bookItem.onclick = () => openModal(book);
        
        const coverImage = book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
            : 'https://via.placeholder.com/60x90?text=No+Cover';

        bookItem.innerHTML = `
            <img src="${coverImage}" alt="Capa do livro">
            <div>
                <h3>${book.title}</h3>
                <p>Autor: ${book.author_name ? book.author_name.join(', ') : 'Autor desconhecido'}</p>
                <p>${book.ebook_count_i > 0 ? '<strong>Disponível para download</strong>' : 'Não disponível'}</p>
            </div>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

// Sugestões em tempo real
function suggestBooks() {
    const query = searchInput.value;
    const language = languageFilter.value;
    fetchBooks(query, language);
}

// Função para abrir o modal com detalhes do livro
function openModal(book) {
    modalTitle.textContent = book.title;
    modalCover.src = book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : 'https://via.placeholder.com/150x225?text=No+Cover';
    modalAuthor.textContent = `Autor: ${book.author_name ? book.author_name.join(', ') : 'Desconhecido'}`;
    modalDescription.textContent = book.first_sentence ? book.first_sentence[0] : 'Sem descrição disponível';
    modalDownloadButton.onclick = () => alert(`Baixando ${book.title}...`);
    bookModal.style.display = 'block';
}

// Fechar o modal
function closeModal() {
    bookModal.style.display = 'none';
}

// Configurações para o botão de busca
document.getElementById("searchButton").addEventListener("click", () => {
    const query = searchInput.value;
    const language = languageFilter.value;
    const downloadableOnly = downloadableFilter.checked;
    bookListContainer.innerHTML = ''; // Limpa a lista para nova busca
    fetchBooks(query, language, downloadableOnly);
});

// Carrega os livros automaticamente ao carregar a página
fetchInitialBooks();
