const books = {
    english: [
        { title: "The Adventures of Tom Sawyer", author: "Mark Twain", downloadable: true },
        { title: "The Secret Garden", author: "Frances Hodgson Burnett", downloadable: true },
        { title: "Little Red Riding Hood", author: "Charles Perrault", downloadable: true },
        { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", downloadable: true },
        { title: "The Wind in the Willows", author: "Kenneth Grahame", downloadable: true },
        { title: "Charlotte's Web", author: "E.B. White", downloadable: true },
        { title: "Winnie-the-Pooh", author: "A.A. Milne", downloadable: true },
        { title: "Pippi Longstocking", author: "Astrid Lindgren", downloadable: true },
        { title: "Heidi", author: "Johanna Spyri", downloadable: true },
        { title: "Black Beauty", author: "Anna Sewell", downloadable: true },
        { title: "The Velveteen Rabbit", author: "Margery Williams", downloadable: true },
        { title: "The Little Prince", author: "Antoine de Saint-Exupéry", downloadable: true },
        { title: "The Ugly Duckling", author: "Hans Christian Andersen", downloadable: true },
        { title: "The Berenstain Bears", author: "Stan and Jan Berenstain", downloadable: true },
        { title: "The Cat in the Hat", author: "Dr. Seuss", downloadable: true },
        { title: "Curious George", author: "H.A. Rey", downloadable: true },
        { title: "The Giving Tree", author: "Shel Silverstein", downloadable: true },
        { title: "Frog and Toad Are Friends", author: "Arnold Lobel", downloadable: true },
        { title: "Goodnight Moon", author: "Margaret Wise Brown", downloadable: true },
        { title: "The Snowy Day", author: "Ezra Jack Keats", downloadable: true },
        { title: "Where the Wild Things Are", author: "Maurice Sendak", downloadable: true },
    ],
    french: [
        { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", downloadable: true },
        { title: "Les Aventures de Tintin", author: "Hergé", downloadable: true },
        { title: "Le Magicien d'Oz", author: "L. Frank Baum", downloadable: true },
        { title: "Les Trois Mousquetaires", author: "Alexandre Dumas", downloadable: true },
        { title: "Le Petit Nicolas", author: "René Gijo", downloadable: true },
        { title: "Les Fables de La Fontaine", author: "Jean de La Fontaine", downloadable: true },
        { title: "Cendrillon", author: "Charles Perrault", downloadable: true },
        { title: "La Belle au bois dormant", author: "Charles Perrault", downloadable: true },
        { title: "Le Livre de la jungle", author: "Rudyard Kipling", downloadable: true },
        { title: "Bambi", author: "Felix Salten", downloadable: true },
        { title: "La Petite Sirène", author: "Hans Christian Andersen", downloadable: true },
        { title: "Le Chat botté", author: "Charles Perrault", downloadable: true },
        { title: "Peter Pan", author: "J.M. Barrie", downloadable: true },
        { title: "Les Contes de Grimm", author: "Les frères Grimm", downloadable: true },
        { title: "Le Fantôme de l'Opéra", author: "Gaston Leroux", downloadable: true },
        { title: "L'Avare", author: "Molière", downloadable: true },
        { title: "Madame Bovary", author: "Gustave Flaubert", downloadable: true },
        { title: "Les Misérables", author: "Victor Hugo", downloadable: true },
        { title: "Le Comte de Monte-Cristo", author: "Alexandre Dumas", downloadable: true },
        { title: "Les Travaux et les Jours", author: "Hésiode", downloadable: true },
        { title: "Le Petit Chaperon Rouge", author: "Charles Perrault", downloadable: true },
    ]
};

const bookListContainer = document.getElementById("bookList");

function displayBooks() {
    bookListContainer.innerHTML = ''; // Clear existing books

    // Display English books
    books.english.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item english'; // Add class for English
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>${book.downloadable ? '<strong>Disponível para download</strong>' : 'Não disponível'}</p>
            <button onclick="downloadBook('${book.title}')">Baixar</button>
        `;
        bookListContainer.appendChild(bookItem);
    });

    // Display French books
    books.french.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item french'; // Add class for French
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>${book.downloadable ? '<strong>Disponível para download</strong>' : 'Não disponível'}</p>
            <button onclick="downloadBook('${book.title}')">Baixar</button>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

function downloadBook(title) {
    alert(`Baixando ${title}...`);
}

// Display books on page load
displayBooks();
