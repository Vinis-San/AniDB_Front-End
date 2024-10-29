const client = 'frontend_anidb';
const clientver = '1';
const protover = '1';
const requestType = 'anime';

const url = `http://api.anidb.net:9001/httpapi?client={str}&clientver={int}&protover=1&request=randomrecommendation`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.text(); // Para XML, você pode querer analisar como XML depois
  })
  .then(data => {
    console.log(data);
    // Aqui você pode converter o XML para JSON ou processá-lo como necessário
  })
  .catch(error => console.error('Erro:', error));
