// Event listener para o botão
document.getElementById('conjure-btn').addEventListener('click', () => { 
  const language = document.getElementById('original-language').value;
  const verb = document.getElementById('verb-input').value.toLowerCase();

  // Verificar se o idioma e o verbo estão disponíveis nos dados
  if (verbsData[language] && verbsData[language][verb]) {
    const translation = verbsData[language][verb];

    // Usar a estrutura de conjugação apropriada com base no idioma
    let conjugation;
    if (language === 'french') {
      conjugation = conjugationsFrench[verb]?.presente;
    } else if (language === 'english') {
      conjugation = conjugationsEnglish[verb]?.presente;
    } else if (language === 'portuguese') {
      conjugation = conjugationsPortuguese[verb]?.presente;
    }

    // Exibir a tradução e a conjugação
    displayTranslation(translation);
    displayConjugation('conjugation-display', conjugation);
  } else {
    alert('Verbo ou língua não encontrado');
  }
});

// Função para exibir tradução
function displayTranslation(translation) {
  const container = document.getElementById('translation-display');
  container.innerHTML = `
    <p><strong>Português:</strong> ${translation.portuguese || '-'}</p>
    <p><strong>Inglês:</strong> ${translation.english || '-'}</p>
    <p><strong>Francês:</strong> ${translation.french || '-'}</p>
  `;
}

// Função para exibir conjugação
function displayConjugation(elementId, conjugation) {
  const container = document.getElementById(elementId);
  if (conjugation) {
    container.innerHTML = `
      <p>1ª P. singular: ${conjugation['1s']}</p>
      <p>2ª P. singular: ${conjugation['2s']}</p>
      <p>3ª P. singular: ${conjugation['3s']}</p>
      <p>1ª P. plural: ${conjugation['1p']}</p>
      <p>2ª P. plural: ${conjugation['2p']}</p>
      <p>3ª P. plural: ${conjugation['3p']}</p>
    `;
  } else {
    container.innerHTML = `<p>Conjugação não disponível.</p>`;
  }
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
const verbTableBody = document.getElementById('verb-table').querySelector('tbody');
const originalLanguageSelect = document.getElementById('original-language');

function updateVerbTable() {
  const language = originalLanguageSelect.value;
  verbTableBody.innerHTML = ''; // Limpa a tabela atual

  const verbs = verbsData[language];
  for (const verb in verbs) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${verbs[verb].portuguese}</td>
      <td>${verbs[verb].english}</td>
      <td>${verbs[verb].french}</td>
    `;
    verbTableBody.appendChild(row);
  }
}

// Atualiza a tabela sempre que a língua original for alterada
originalLanguageSelect.addEventListener('change', updateVerbTable);

// Chama a função para preencher a tabela no início
updateVerbTable();


// tema claro e tema escuro
const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'); // Alterna a classe do tema
    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Altera o ícone do botão
    themeButton.textContent = isDarkTheme ? '🌞' : '🌙'; // Lua para o tema escuro, Sol para o tema claro
});
  