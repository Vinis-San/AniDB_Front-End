const verbsData = {
    portuguese: {
        'ser': { portuguese: 'ser', english: 'to be', french: 'être' },
        'ter': { portuguese: 'ter', english: 'to have', french: 'avoir' },
        'falar': { portuguese: 'falar', english: 'to speak', french: 'parler' },
        'comer': { portuguese: 'comer', english: 'to eat', french: 'manger' },
        'beber': { portuguese: 'beber', english: 'to drink', french: 'boire' },
        'ir': { portuguese: 'ir', english: 'to go', french: 'aller' },
        'ver': { portuguese: 'ver', english: 'to see', french: 'voir' },
        'dar': { portuguese: 'dar', english: 'to give', french: 'donner' },
        'fazer': { portuguese: 'fazer', english: 'to do/make', french: 'faire' },
        'dizer': { portuguese: 'dizer', english: 'to say', french: 'dire' },
        'saber': { portuguese: 'saber', english: 'to know', french: 'savoir' },
        'poder': { portuguese: 'poder', english: 'to be able to', french: 'pouvoir' },
        'viver': { portuguese: 'viver', english: 'to live', french: 'vivre' },
        'trabalhar': { portuguese: 'trabalhar', english: 'to work', french: 'travailler' },
        'estudar': { portuguese: 'estudar', english: 'to study', french: 'étudier' },
        'jogar': { portuguese: 'jogar', english: 'to play', french: 'jouer' },
        'aprender': { portuguese: 'aprender', english: 'to learn', french: 'apprendre' },
        'ensinar': { portuguese: 'ensinar', english: 'to teach', french: 'enseigner' },
        'pensar': { portuguese: 'pensar', english: 'to think', french: 'penser' },
        'sorrir': { portuguese: 'sorrir', english: 'to smile', french: 'sourire' },
        'chorar': { portuguese: 'chorar', english: 'to cry', french: 'pleurer' },
        'esperar': { portuguese: 'esperar', english: 'to wait', french: 'attendre' },
        'ficar': { portuguese: 'ficar', english: 'to stay', french: 'rester' },
        'cantar': { portuguese: 'cantar', english: 'to sing', french: 'chanter' },
        'dançar': { portuguese: 'dançar', english: 'to dance', french: 'danser' },
        'rir': { portuguese: 'rir', english: 'to laugh', french: 'rire' },
        'andar': { portuguese: 'andar', english: 'to walk', french: 'marcher' },
        'dirigir': { portuguese: 'dirigir', english: 'to drive', french: 'conduire' },
        'viajar': { portuguese: 'viajar', english: 'to travel', french: 'voyager' },
        'contar': { portuguese: 'contar', english: 'to tell', french: 'raconter' },
        'escrever': { portuguese: 'escrever', english: 'to write', french: 'écrire' },
        'ler': { portuguese: 'ler', english: 'to read', french: 'lire' },
        'comprar': { portuguese: 'comprar', english: 'to buy', french: 'acheter' },
        'vender': { portuguese: 'vender', english: 'to sell', french: 'vendre' }
    },

    english: {
        'to be': { portuguese: 'ser', english: 'to be', french: 'être' },
        'to have': { portuguese: 'ter', english: 'to have', french: 'avoir' },
        'to speak': { portuguese: 'falar', english: 'to speak', french: 'parler' },
        'to eat': { portuguese: 'comer', english: 'to eat', french: 'manger' },
        'to drink': { portuguese: 'beber', english: 'to drink', french: 'boire' },
        'to go': { portuguese: 'ir', english: 'to go', french: 'aller' },
        'to see': { portuguese: 'ver', english: 'to see', french: 'voir' },
        'to give': { portuguese: 'dar', english: 'to give', french: 'donner' },
        'to do/make': { portuguese: 'fazer', english: 'to do/make', french: 'faire' },
        'to say': { portuguese: 'dizer', english: 'to say', french: 'dire' },
        'to know': { portuguese: 'saber', english: 'to know', french: 'savoir' },
        'to be able to': { portuguese: 'poder', english: 'to be able to', french: 'pouvoir' },
        'to live': { portuguese: 'viver', english: 'to live', french: 'vivre' },
        'to work': { portuguese: 'trabalhar', english: 'to work', french: 'travailler' },
        'to study': { portuguese: 'estudar', english: 'to study', french: 'étudier' },
        'to play': { portuguese: 'jogar', english: 'to play', french: 'jouer' },
        'to learn': { portuguese: 'aprender', english: 'to learn', french: 'apprendre' },
        'to teach': { portuguese: 'ensinar', english: 'to teach', french: 'enseigner' },
        'to think': { portuguese: 'pensar', english: 'to think', french: 'penser' },
        'to smile': { portuguese: 'sorrir', english: 'to smile', french: 'sourire' },
        'to cry': { portuguese: 'chorar', english: 'to cry', french: 'pleurer' },
        'to wait': { portuguese: 'esperar', english: 'to wait', french: 'attendre' },
        'to stay': { portuguese: 'ficar', english: 'to stay', french: 'rester' },
        'to sing': { portuguese: 'cantar', english: 'to sing', french: 'chanter' },
        'to dance': { portuguese: 'dançar', english: 'to dance', french: 'danser' },
        'to laugh': { portuguese: 'rir', english: 'to laugh', french: 'rire' },
        'to walk': { portuguese: 'andar', english: 'to walk', french: 'marcher' },
        'to drive': { portuguese: 'dirigir', english: 'to drive', french: 'conduire' },
        'to travel': { portuguese: 'viajar', english: 'to travel', french: 'voyager' },
        'to tell': { portuguese: 'contar', english: 'to tell', french: 'raconter' },
        'to write': { portuguese: 'escrever', english: 'to write', french: 'écrire' },
        'to read': { portuguese: 'ler', english: 'to read', french: 'lire' },
        'to buy': { portuguese: 'comprar', english: 'to buy', french: 'acheter' },
        'to sell': { portuguese: 'vender', english: 'to sell', french: 'vendre' }
    },

    french: {
        'être': { portuguese: 'ser', english: 'to be', french: 'être' },
        'avoir': { portuguese: 'ter', english: 'to have', french: 'avoir' },
        'parler': { portuguese: 'falar', english: 'to speak', french: 'parler' },
        'manger': { portuguese: 'comer', english: 'to eat', french: 'manger' },
        'boire': { portuguese: 'beber', english: 'to drink', french: 'boire' },
        'aller': { portuguese: 'ir', english: 'to go', french: 'aller' },
        'voir': { portuguese: 'ver', english: 'to see', french: 'voir' },
        'donner': { portuguese: 'dar', english: 'to give', french: 'donner' },
        'faire': { portuguese: 'fazer', english: 'to do/make', french: 'faire' },
        'dire': { portuguese: 'dizer', english: 'to say', french: 'dire' },
        'savoir': { portuguese: 'saber', english: 'to know', french: 'savoir' },
        'pouvoir': { portuguese: 'poder', english: 'to be able to', french: 'pouvoir' },
        'vivre': { portuguese: 'viver', english: 'to live', french: 'vivre' },
        'travailler': { portuguese: 'trabalhar', english: 'to work', french: 'travailler' },
        'étudier': { portuguese: 'estudar', english: 'to study', french: 'étudier' },
        'jouer': { portuguese: 'jogar', english: 'to play', french: 'jouer' },
        'apprendre': { portuguese: 'aprender', english: 'to learn', french: 'apprendre' },
        'enseigner': { portuguese: 'ensinar', english: 'to teach', french: 'enseigner' },
        'penser': { portuguese: 'pensar', english: 'to think', french: 'penser' },
        'sourire': { portuguese: 'sorrir', english: 'to smile', french: 'sourire' },
        'pleurer': { portuguese: 'chorar', english: 'to cry', french: 'pleurer' },
        'attendre': { portuguese: 'esperar', english: 'to wait', french: 'attendre' },
        'rester': { portuguese: 'ficar', english: 'to stay', french: 'rester' },
        'chanter': { portuguese: 'cantar', english: 'to sing', french: 'chanter' },
        'danser': { portuguese: 'dançar', english: 'to dance', french: 'danser' },
        'rire': { portuguese: 'rir', english: 'to laugh', french: 'rire' },
        'marcher': { portuguese: 'andar', english: 'to walk', french: 'marcher' },
        'conduire': { portuguese: 'dirigir', english: 'to drive', french: 'conduire' },
        'voyager': { portuguese: 'viajar', english: 'to travel', french: 'voyager' },
        'raconter': { portuguese: 'contar', english: 'to tell', french: 'raconter' },
        'écrire': { portuguese: 'escrever', english: 'to write', french: 'écrire' },
        'lire': { portuguese: 'ler', english: 'to read', french: 'lire' },
        'acheter': { portuguese: 'comprar', english: 'to buy', french: 'acheter' },
        'vendre': { portuguese: 'vender', english: 'to sell', french: 'vendre' }
    }
};


const conjugationsPortuguese = {
    'ser': {
        presente: { '1s': 'sou', '2s': 'és', '3s': 'é', '1p': 'somos', '2p': 'sois', '3p': 'são' },
        passado: { '1s': 'fui', '2s': 'foste', '3s': 'foi', '1p': 'fomos', '2p': 'fostes', '3p': 'foram' }
    },
    'ter': {
        presente: { '1s': 'tenho', '2s': 'tens', '3s': 'tem', '1p': 'temos', '2p': 'tendes', '3p': 'têm' },
        passado: { '1s': 'tive', '2s': 'tiveste', '3s': 'teve', '1p': 'tivemos', '2p': 'tivestes', '3p': 'tiveram' }
    },
    'falar': {
        presente: { '1s': 'falo', '2s': 'falas', '3s': 'fala', '1p': 'falamos', '2p': 'falais', '3p': 'falam' },
        passado: { '1s': 'falei', '2s': 'falaste', '3s': 'falou', '1p': 'falamos', '2p': 'falastes', '3p': 'falaram' }
    },
    'comer': {
        presente: { '1s': 'como', '2s': 'comes', '3s': 'come', '1p': 'comemos', '2p': 'comeis', '3p': 'comem' },
        passado: { '1s': 'comi', '2s': 'comeste', '3s': 'comeu', '1p': 'comemos', '2p': 'comestes', '3p': 'comeram' }
    },
    'beber': {
        presente: { '1s': 'bebo', '2s': 'bebes', '3s': 'bebe', '1p': 'bebemos', '2p': 'bebes', '3p': 'bebem' },
        passado: { '1s': 'bebi', '2s': 'bebeste', '3s': 'bebeu', '1p': 'bebemos', '2p': 'bebestes', '3p': 'beberam' }
    },
    'ir': {
        presente: { '1s': 'vou', '2s': 'vais', '3s': 'vai', '1p': 'vamos', '2p': 'ides', '3p': 'vão' },
        passado: { '1s': 'fui', '2s': 'foste', '3s': 'foi', '1p': 'fomos', '2p': 'fostes', '3p': 'foram' }
    },
    'ver': {
        presente: { '1s': 'vejo', '2s': 'vês', '3s': 'vê', '1p': 'vemos', '2p': 'vedes', '3p': 'veem' },
        passado: { '1s': 'vi', '2s': 'viste', '3s': 'viu', '1p': 'vimos', '2p': 'vistes', '3p': 'viram' }
    },
    'dar': {
        presente: { '1s': 'dou', '2s': 'dás', '3s': 'dá', '1p': 'damos', '2p': 'dais', '3p': 'dão' },
        passado: { '1s': 'dei', '2s': 'deu', '3s': 'deu', '1p': 'demos', '2p': 'deis', '3p': 'deram' }
    },
    'fazer': {
        presente: { '1s': 'faço', '2s': 'fazes', '3s': 'faz', '1p': 'fazemos', '2p': 'fazeis', '3p': 'fazem' },
        passado: { '1s': 'fiz', '2s': 'fizeste', '3s': 'fez', '1p': 'fizemos', '2p': 'fizestes', '3p': 'fizeram' }
    },
    'dizer': {
        presente: { '1s': 'digo', '2s': 'dizes', '3s': 'diz', '1p': 'dizemos', '2p': 'dizeis', '3p': 'dizem' },
        passado: { '1s': 'disse', '2s': 'disseste', '3s': 'disse', '1p': 'dissemos', '2p': 'dissestes', '3p': 'disseram' }
    },
    'saber': {
        presente: { '1s': 'sei', '2s': 'sabes', '3s': 'sabe', '1p': 'sabemos', '2p': 'sabeis', '3p': 'sabem' },
        passado: { '1s': 'soube', '2s': 'soubeste', '3s': 'soube', '1p': 'soubemos', '2p': 'soubestes', '3p': 'souberam' }
    },
    'poder': {
        presente: { '1s': 'posso', '2s': 'podes', '3s': 'pode', '1p': 'podemos', '2p': 'podeis', '3p': 'podem' },
        passado: { '1s': 'pude', '2s': 'pudeste', '3s': 'pôde', '1p': 'pudemos', '2p': 'pudestes', '3p': 'puderam' }
    },
    'viver': {
        presente: { '1s': 'vivo', '2s': 'vives', '3s': 'vive', '1p': 'vivemos', '2p': 'viveis', '3p': 'vivem' },
        passado: { '1s': 'vivi', '2s': 'viveste', '3s': 'viveu', '1p': 'vivemos', '2p': 'vivestes', '3p': 'viveram' }
    },
    'trabalhar': {
        presente: { '1s': 'trabalho', '2s': 'trabalhas', '3s': 'trabalha', '1p': 'trabalhamos', '2p': 'trabalhais', '3p': 'trabalham' },
        passado: { '1s': 'trabalhei', '2s': 'trabalhaste', '3s': 'trabalhou', '1p': 'trabalhamos', '2p': 'trabalhastes', '3p': 'trabalharam' }
    },
    'estudar': {
        presente: { '1s': 'estudo', '2s': 'estudas', '3s': 'estuda', '1p': 'estudamos', '2p': 'estudais', '3p': 'estudam' },
        passado: { '1s': 'estudei', '2s': 'estudaste', '3s': 'estudou', '1p': 'estudamos', '2p': 'estudastes', '3p': 'estudaram' }
    },
    'jogar': {
        presente: { '1s': 'jogo', '2s': 'jogas', '3s': 'joga', '1p': 'jogamos', '2p': 'jogais', '3p': 'jogam' },
        passado: { '1s': 'joguei', '2s': 'jogaste', '3s': 'jogou', '1p': 'jogamos', '2p': 'jogastes', '3p': 'jogaram' }
    },
    'aprender': {
        presente: { '1s': 'aprendo', '2s': 'aprendes', '3s': 'aprende', '1p': 'aprendemos', '2p': 'aprendeis', '3p': 'aprendem' },
        passado: { '1s': 'aprendi', '2s': 'aprendeste', '3s': 'aprendeu', '1p': 'aprendemos', '2p': 'aprendestes', '3p': 'aprenderam' }
    },
    'ensinar': {
        presente: { '1s': 'ensino', '2s': 'ensinas', '3s': 'ensina', '1p': 'ensinamos', '2p': 'ensinais', '3p': 'ensinam' },
        passado: { '1s': 'ensinei', '2s': 'ensinaste', '3s': 'ensinou', '1p': 'ensinamos', '2p': 'ensinastes', '3p': 'ensinaram' }
    },
    'cantar': {
        presente: { '1s': 'canto', '2s': 'cantas', '3s': 'canta', '1p': 'cantamos', '2p': 'cantais', '3p': 'cantam' },
        passado: { '1s': 'cantei', '2s': 'cantaste', '3s': 'cantou', '1p': 'cantamos', '2p': 'cantastes', '3p': 'cantaram' }
    },
    'dançar': {
        presente: { '1s': 'danço', '2s': 'dancas', '3s': 'dança', '1p': 'dancamos', '2p': 'dancais', '3p': 'dancam' },
        passado: { '1s': 'dancei', '2s': 'dancaste', '3s': 'dançou', '1p': 'dancamos', '2p': 'dancastes', '3p': 'dancaram' }
    },
    'ouvir': {
        presente: { '1s': 'ouço', '2s': 'ouves', '3s': 'ouve', '1p': 'ouvimos', '2p': 'ouvis', '3p': 'ouvem' },
        passado: { '1s': 'ouvi', '2s': 'ouveste', '3s': 'ouve', '1p': 'ouvimos', '2p': 'ouvistes', '3p': 'ouviram' }
    },
    'escrever': {
        presente: { '1s': 'escrevo', '2s': 'escreves', '3s': 'escreve', '1p': 'escrevemos', '2p': 'escreveis', '3p': 'escrevem' },
        passado: { '1s': 'escrevi', '2s': 'escreveste', '3s': 'escreveu', '1p': 'escrevemos', '2p': 'escrevestes', '3p': 'escreveram' }
    },
     'ler': {
        presente: { '1s': 'leio', '2s': 'lês', '3s': 'lê', '1p': 'lemos', '2p': 'ledes', '3p': 'leem' },
        passado: { '1s': 'li', '2s': 'leste', '3s': 'leu', '1p': 'lemos', '2p': 'lestes', '3p': 'leram' }
    },
      'comprar': {
        presente: { '1s': 'compro', '2s': 'compras', '3s': 'compra', '1p': 'compramos', '2p': 'comprais', '3p': 'compram' },
        passado: { '1s': 'comprei', '2s': 'compraste', '3s': 'comprou', '1p': 'compramos', '2p': 'comprastes', '3p': 'compraram' }
    },
      'vender': {
        presente: { '1s': 'vendo', '2s': 'vendes', '3s': 'vende', '1p': 'vendemos', '2p': 'vendeis', '3p': 'vendem' },
        passado: { '1s': 'vendi', '2s': 'vendeste', '3s': 'vendeu', '1p': 'vendemos', '2p': 'vendestes', '3p': 'venderam' }
    }
}
    
    
const conjugationsEnglish = {
            'to be': {
                presente: { '1s': 'am', '2s': 'are', '3s': 'is', '1p': 'are', '2p': 'are', '3p': 'are' },
                passado: { '1s': 'was', '2s': 'were', '3s': 'was', '1p': 'were', '2p': 'were', '3p': 'were' }
            },
            'to have': {
                presente: { '1s': 'have', '2s': 'have', '3s': 'has', '1p': 'have', '2p': 'have', '3p': 'have' },
                passado: { '1s': 'had', '2s': 'had', '3s': 'had', '1p': 'had', '2p': 'had', '3p': 'had' }
            },
            'to speak': {
                presente: { '1s': 'speak', '2s': 'speak', '3s': 'speaks', '1p': 'speak', '2p': 'speak', '3p': 'speak' },
                passado: { '1s': 'spoke', '2s': 'spoke', '3s': 'spoke', '1p': 'spoke', '2p': 'spoke', '3p': 'spoke' }
            },
            'to eat': {
                presente: { '1s': 'eat', '2s': 'eat', '3s': 'eats', '1p': 'eat', '2p': 'eat', '3p': 'eat' },
                passado: { '1s': 'ate', '2s': 'ate', '3s': 'ate', '1p': 'ate', '2p': 'ate', '3p': 'ate' }
            },
            'to drink': {
                presente: { '1s': 'drink', '2s': 'drink', '3s': 'drinks', '1p': 'drink', '2p': 'drink', '3p': 'drink' },
                passado: { '1s': 'drank', '2s': 'drank', '3s': 'drank', '1p': 'drank', '2p': 'drank', '3p': 'drank' }
            },
            'to go': {
                presente: { '1s': 'go', '2s': 'go', '3s': 'goes', '1p': 'go', '2p': 'go', '3p': 'go' },
                passado: { '1s': 'went', '2s': 'went', '3s': 'went', '1p': 'went', '2p': 'went', '3p': 'went' }
            },
            'to see': {
                presente: { '1s': 'see', '2s': 'see', '3s': 'sees', '1p': 'see', '2p': 'see', '3p': 'see' },
                passado: { '1s': 'saw', '2s': 'saw', '3s': 'saw', '1p': 'saw', '2p': 'saw', '3p': 'saw' }
            },
            'to give': {
                presente: { '1s': 'give', '2s': 'give', '3s': 'gives', '1p': 'give', '2p': 'give', '3p': 'give' },
                passado: { '1s': 'gave', '2s': 'gave', '3s': 'gave', '1p': 'gave', '2p': 'gave', '3p': 'gave' }
            },
            'to do/make': {
                presente: { '1s': 'do', '2s': 'do', '3s': 'does', '1p': 'do', '2p': 'do', '3p': 'do' },
                passado: { '1s': 'did', '2s': 'did', '3s': 'did', '1p': 'did', '2p': 'did', '3p': 'did' }
            },
            'to say': {
                presente: { '1s': 'say', '2s': 'say', '3s': 'says', '1p': 'say', '2p': 'say', '3p': 'say' },
                passado: { '1s': 'said', '2s': 'said', '3s': 'said', '1p': 'said', '2p': 'said', '3p': 'said' }
            },
            'to know': {
                presente: { '1s': 'know', '2s': 'know', '3s': 'knows', '1p': 'know', '2p': 'know', '3p': 'know' },
                passado: { '1s': 'knew', '2s': 'knew', '3s': 'knew', '1p': 'knew', '2p': 'knew', '3p': 'knew' }
            },
            'to be able to': {
                presente: { '1s': 'can', '2s': 'can', '3s': 'can', '1p': 'can', '2p': 'can', '3p': 'can' },
                passado: { '1s': 'could', '2s': 'could', '3s': 'could', '1p': 'could', '2p': 'could', '3p': 'could' }
            },
            'to live': {
                presente: { '1s': 'live', '2s': 'live', '3s': 'lives', '1p': 'live', '2p': 'live', '3p': 'live' },
                passado: { '1s': 'lived', '2s': 'lived', '3s': 'lived', '1p': 'lived', '2p': 'lived', '3p': 'lived' }
            },
            'to work': {
                presente: { '1s': 'work', '2s': 'work', '3s': 'works', '1p': 'work', '2p': 'work', '3p': 'work' },
                passado: { '1s': 'worked', '2s': 'worked', '3s': 'worked', '1p': 'worked', '2p': 'worked', '3p': 'worked' }
            },
            'to study': {
                presente: { '1s': 'study', '2s': 'study', '3s': 'studies', '1p': 'study', '2p': 'study', '3p': 'study' },
                passado: { '1s': 'studied', '2s': 'studied', '3s': 'studied', '1p': 'studied', '2p': 'studied', '3p': 'studied' }
            },
            'to play': {
                presente: { '1s': 'play', '2s': 'play', '3s': 'plays', '1p': 'play', '2p': 'play', '3p': 'play' },
                passado: { '1s': 'played', '2s': 'played', '3s': 'played', '1p': 'played', '2p': 'played', '3p': 'played' }
            },
            'to learn': {
                presente: { '1s': 'learn', '2s': 'learn', '3s': 'learns', '1p': 'learn', '2p': 'learn', '3p': 'learn' },
                passado: { '1s': 'learned', '2s': 'learned', '3s': 'learned', '1p': 'learned', '2p': 'learned', '3p': 'learned' }
            },
            'to teach': {
                presente: { '1s': 'teach', '2s': 'teach', '3s': 'teaches', '1p': 'teach', '2p': 'teach', '3p': 'teach' },
                passado: { '1s': 'taught', '2s': 'taught', '3s': 'taught', '1p': 'taught', '2p': 'taught', '3p': 'taught' }
            },
            'to think': {
                presente: { '1s': 'think', '2s': 'think', '3s': 'thinks', '1p': 'think', '2p': 'think', '3p': 'think' },
                passado: { '1s': 'thought', '2s': 'thought', '3s': 'thought', '1p': 'thought', '2p': 'thought', '3p': 'thought' }
            },
            'to smile': {
                presente: { '1s': 'smile', '2s': 'smile', '3s': 'smiles', '1p': 'smile', '2p': 'smile', '3p': 'smile' },
                passado: { '1s': 'smiled', '2s': 'smiled', '3s': 'smiled', '1p': 'smiled', '2p': 'smiled', '3p': 'smiled' }
            },
            'to cry': {
                presente: { '1s': 'cry', '2s': 'cry', '3s': 'cries', '1p': 'cry', '2p': 'cry', '3p': 'cry' },
                passado: { '1s': 'cried', '2s': 'cried', '3s': 'cried', '1p': 'cried', '2p': 'cried', '3p': 'cried' }
            },
            'to wait': {
                presente: { '1s': 'wait', '2s': 'wait', '3s': 'waits', '1p': 'wait', '2p': 'wait', '3p': 'wait' },
                passado: { '1s': 'waited', '2s': 'waited', '3s': 'waited', '1p': 'waited', '2p': 'waited', '3p': 'waited' }
            },
            'to stay': {
                presente: { '1s': 'stay', '2s': 'stay', '3s': 'stays', '1p': 'stay', '2p': 'stay', '3p': 'stay' },
                passado: { '1s': 'stayed', '2s': 'stayed', '3s': 'stayed', '1p': 'stayed', '2p': 'stayed', '3p': 'stayed' }
            },
            'to sing': {
                presente: { '1s': 'sing', '2s': 'sing', '3s': 'sings', '1p': 'sing', '2p': 'sing', '3p': 'sing' },
                passado: { '1s': 'sang', '2s': 'sang', '3s': 'sang', '1p': 'sang', '2p': 'sang', '3p': 'sang' }
            },
            'to dance': {
                presente: { '1s': 'dance', '2s': 'dance', '3s': 'dances', '1p': 'dance', '2p': 'dance', '3p': 'dance' },
                passado: { '1s': 'danced', '2s': 'danced', '3s': 'danced', '1p': 'danced', '2p': 'danced', '3p': 'danced' }
            },
            'to laugh': {
                presente: { '1s': 'laugh', '2s': 'laugh', '3s': 'laughs', '1p': 'laugh', '2p': 'laugh', '3p': 'laugh' },
                passado: { '1s': 'laughed', '2s': 'laughed', '3s': 'laughed', '1p': 'laughed', '2p': 'laughed', '3p': 'laughed' }
            },
            'to walk': {
                presente: { '1s': 'walk', '2s': 'walk', '3s': 'walks', '1p': 'walk', '2p': 'walk', '3p': 'walk' },
                passado: { '1s': 'walked', '2s': 'walked', '3s': 'walked', '1p': 'walked', '2p': 'walked', '3p': 'walked' }
            },
            'to drive': {
                presente: { '1s': 'drive', '2s': 'drive', '3s': 'drives', '1p': 'drive', '2p': 'drive', '3p': 'drive' },
                passado: { '1s': 'drove', '2s': 'drove', '3s': 'drove', '1p': 'drove', '2p': 'drove', '3p': 'drove' }
            },
            'to travel': {
                presente: { '1s': 'travel', '2s': 'travel', '3s': 'travels', '1p': 'travel', '2p': 'travel', '3p': 'travel' },
                passado: { '1s': 'traveled', '2s': 'traveled', '3s': 'traveled', '1p': 'traveled', '2p': 'traveled', '3p': 'traveled' }
            },
            'to tell': {
                presente: { '1s': 'tell', '2s': 'tell', '3s': 'tells', '1p': 'tell', '2p': 'tell', '3p': 'tell' },
                passado: { '1s': 'told', '2s': 'told', '3s': 'told', '1p': 'told', '2p': 'told', '3p': 'told' }
            },
            'to write': {
                presente: { '1s': 'write', '2s': 'write', '3s': 'writes', '1p': 'write', '2p': 'write', '3p': 'write' },
                passado: { '1s': 'wrote', '2s': 'wrote', '3s': 'wrote', '1p': 'wrote', '2p': 'wrote', '3p': 'wrote' }
            },
            'to read': {
                presente: { '1s': 'read', '2s': 'read', '3s': 'reads', '1p': 'read', '2p': 'read', '3p': 'read' },
                passado: { '1s': 'read', '2s': 'read', '3s': 'read', '1p': 'read', '2p': 'read', '3p': 'read' }
            },
            'to buy': {
                presente: { '1s': 'buy', '2s': 'buy', '3s': 'buys', '1p': 'buy', '2p': 'buy', '3p': 'buy' },
                passado: { '1s': 'bought', '2s': 'bought', '3s': 'bought', '1p': 'bought', '2p': 'bought', '3p': 'bought' }
            },
            'to sell': {
                presente: { '1s': 'sell', '2s': 'sell', '3s': 'sells', '1p': 'sell', '2p': 'sell', '3p': 'sell' },
                passado: { '1s': 'sold', '2s': 'sold', '3s': 'sold', '1p': 'sold', '2p': 'sold', '3p': 'sold' }
            }
        }

         const   conjugationsFrench = {
            'être': {
                presente: { '1s': 'suis', '2s': 'es', '3s': 'est', '1p': 'sommes', '2p': 'êtes', '3p': 'sont' },
                passado: { '1s': 'ai été', '2s': 'as été', '3s': 'a été', '1p': 'avons été', '2p': 'avez été', '3p': 'ont été' }
            },
            'avoir': {
                presente: { '1s': 'ai', '2s': 'as', '3s': 'a', '1p': 'avons', '2p': 'avez', '3p': 'ont' },
                passado: { '1s': 'ai eu', '2s': 'as eu', '3s': 'a eu', '1p': 'avons eu', '2p': 'avez eu', '3p': 'ont eu' }
            },
            'parler': {
                presente: { '1s': 'parle', '2s': 'parles', '3s': 'parle', '1p': 'parlons', '2p': 'parlez', '3p': 'parlent' },
                passado: { '1s': 'ai parlé', '2s': 'as parlé', '3s': 'a parlé', '1p': 'avons parlé', '2p': 'avez parlé', '3p': 'ont parlé' }
            },
            'manger': {
                presente: { '1s': 'mange', '2s': 'manges', '3s': 'mange', '1p': 'mangeons', '2p': 'mangez', '3p': 'mangent' },
                passado: { '1s': 'ai mangé', '2s': 'as mangé', '3s': 'a mangé', '1p': 'avons mangé', '2p': 'avez mangé', '3p': 'ont mangé' }
            },
            'boire': {
                presente: { '1s': 'bois', '2s': 'bois', '3s': 'boit', '1p': 'buvons', '2p': 'buvez', '3p': 'boivent' },
                passado: { '1s': 'ai bu', '2s': 'as bu', '3s': 'a bu', '1p': 'avons bu', '2p': 'avez bu', '3p': 'ont bu' }
            },
            'aller': {
                presente: { '1s': 'vais', '2s': 'vas', '3s': 'va', '1p': 'allons', '2p': 'allez', '3p': 'vont' },
                passado: { '1s': 'suis allé(e)', '2s': 'es allé(e)', '3s': 'est allé(e)', '1p': 'sommes allé(e)s', '2p': 'êtes allé(e)s', '3p': 'sont allé(e)s' }
            },
            'voir': {
                presente: { '1s': 'vois', '2s': 'vois', '3s': 'voit', '1p': 'voyons', '2p': 'voyez', '3p': 'voient' },
                passado: { '1s': 'ai vu', '2s': 'as vu', '3s': 'a vu', '1p': 'avons vu', '2p': 'avez vu', '3p': 'ont vu' }
            },
            'donner': {
                presente: { '1s': 'donne', '2s': 'donnes', '3s': 'donne', '1p': 'donnons', '2p': 'donnez', '3p': 'donnent' },
                passado: { '1s': 'ai donné', '2s': 'as donné', '3s': 'a donné', '1p': 'avons donné', '2p': 'avez donné', '3p': 'ont donné' }
            },
            'faire': {
                presente: { '1s': 'fais', '2s': 'fais', '3s': 'fait', '1p': 'faisons', '2p': 'faites', '3p': 'font' },
                passado: { '1s': 'ai fait', '2s': 'as fait', '3s': 'a fait', '1p': 'avons fait', '2p': 'avez fait', '3p': 'ont fait' }
            },
            'dire': {
                presente: { '1s': 'dis', '2s': 'dis', '3s': 'dit', '1p': 'disons', '2p': 'dites', '3p': 'disent' },
                passado: { '1s': 'ai dit', '2s': 'as dit', '3s': 'a dit', '1p': 'avons dit', '2p': 'avez dit', '3p': 'ont dit' }
            },
            'savoir': {
                presente: { '1s': 'sais', '2s': 'sais', '3s': 'sait', '1p': 'savons', '2p': 'savez', '3p': 'savent' },
                passado: { '1s': 'ai su', '2s': 'as su', '3s': 'a su', '1p': 'avons su', '2p': 'avez su', '3p': 'ont su' }
            },
            'pouvoir': {
                presente: { '1s': 'peux', '2s': 'peux', '3s': 'peut', '1p': 'pouvons', '2p': 'pouvez', '3p': 'peuvent' },
                passado: { '1s': 'ai pu', '2s': 'as pu', '3s': 'a pu', '1p': 'avons pu', '2p': 'avez pu', '3p': 'ont pu' }
            },
            'vivre': {
                presente: { '1s': 'vis', '2s': 'vis', '3s': 'vit', '1p': 'vivons', '2p': 'vivez', '3p': 'vivent' },
                passado: { '1s': 'ai vécu', '2s': 'as vécu', '3s': 'a vécu', '1p': 'avons vécu', '2p': 'avez vécu', '3p': 'ont vécu' }
            },
            'travailler': {
                presente: { '1s': 'travaille', '2s': 'travailles', '3s': 'travaille', '1p': 'travaillons', '2p': 'travaillez', '3p': 'travaillent' },
                passado: { '1s': 'ai travaillé', '2s': 'as travaillé', '3s': 'a travaillé', '1p': 'avons travaillé', '2p': 'avez travaillé', '3p': 'ont travaillé' }
            },
            'étudier': {
                presente: { '1s': 'étudie', '2s': 'étudies', '3s': 'étudie', '1p': 'étudions', '2p': 'étudiez', '3p': 'étudient' },
                passado: { '1s': 'ai étudié', '2s': 'as étudié', '3s': 'a étudié', '1p': 'avons étudié', '2p': 'avez étudié', '3p': 'ont étudié' }
            },
            'jouer': {
                presente: { '1s': 'joue', '2s': 'joues', '3s': 'joue', '1p': 'jouons', '2p': 'jouez', '3p': 'jouent' },
                passado: { '1s': 'ai joué', '2s': 'as joué', '3s': 'a joué', '1p': 'avons joué', '2p': 'avez joué', '3p': 'ont joué' }
            },
            'apprendre': {
                presente: { '1s': 'apprends', '2s': 'apprends', '3s': 'apprend', '1p': 'apprenons', '2p': 'apprenez', '3p': 'apprennent' },
                passado: { '1s': 'ai appris', '2s': 'as appris', '3s': 'a appris', '1p': 'avons appris', '2p': 'avez appris', '3p': 'ont appris' }
            },
            'enseigner': {
                presente: { '1s': 'enseigne', '2s': 'enseignes', '3s': 'enseigne', '1p': 'enseignons', '2p': 'enseignez', '3p': 'enseignent' },
                passado: { '1s': 'ai enseigné', '2s': 'as enseigné', '3s': 'a enseigné', '1p': 'avons enseigné', '2p': 'avez enseigné', '3p': 'ont enseigné' }
            },
            'penser': {
                presente: { '1s': 'pense', '2s': 'penses', '3s': 'pense', '1p': 'pensons', '2p': 'pensez', '3p': 'pensent' },
                passado: { '1s': 'ai pensé', '2s': 'as pensé', '3s': 'a pensé', '1p': 'avons pensé', '2p': 'avez pensé', '3p': 'ont pensé' }
            },
            'sourire': {
                presente: { '1s': 'sourire', '2s': 'souris', '3s': 'sourit', '1p': 'sourions', '2p': 'souriez', '3p': 'sourient' },
                passado: { '1s': 'ai souri', '2s': 'as souri', '3s': 'a souri', '1p': 'avons souri', '2p': 'avez souri', '3p': 'ont souri' }
            },
            'pleurer': {
                presente: { '1s': 'pleure', '2s': 'pleures', '3s': 'pleure', '1p': 'pleurons', '2p': 'pleurez', '3p': 'pleurent' },
                passado: { '1s': 'ai pleuré', '2s': 'as pleuré', '3s': 'a pleuré', '1p': 'avons pleuré', '2p': 'avez pleuré', '3p': 'ont pleuré' }
            },
            'attendre': {
                presente: { '1s': 'attends', '2s': 'attends', '3s': 'attend', '1p': 'attendons', '2p': 'attendez', '3p': 'attendent' },
                passado: { '1s': 'ai attendu', '2s': 'as attendu', '3s': 'a attendu', '1p': 'avons attendu', '2p': 'avez attendu', '3p': 'ont attendu' }
            },
            'rester': {
                presente: { '1s': 'reste', '2s': 'restes', '3s': 'reste', '1p': 'restons', '2p': 'restez', '3p': 'restent' },
                passado: { '1s': 'suis resté(e)', '2s': 'es resté(e)', '3s': 'est resté(e)', '1p': 'sommes resté(e)s', '2p': 'êtes resté(e)s', '3p': 'sont resté(e)s' }
            },
            'chanter': {
                presente: { '1s': 'chante', '2s': 'chantes', '3s': 'chante', '1p': 'chantons', '2p': 'chantez', '3p': 'chantent' },
                passado: { '1s': 'ai chanté', '2s': 'as chanté', '3s': 'a chanté', '1p': 'avons chanté', '2p': 'avez chanté', '3p': 'ont chanté' }
            },
            'danser': {
                presente: { '1s': 'danse', '2s': 'danses', '3s': 'danse', '1p': 'dansons', '2p': 'dansez', '3p': 'dansent' },
                passado: { '1s': 'ai dansé', '2s': 'as dansé', '3s': 'a dansé', '1p': 'avons dansé', '2p': 'avez dansé', '3p': 'ont dansé' }
            },
            'rire': {
                presente: { '1s': 'ris', '2s': 'ris', '3s': 'rit', '1p': 'rions', '2p': 'riez', '3p': 'rient' },
                passado: { '1s': 'ai ri', '2s': 'as ri', '3s': 'a ri', '1p': 'avons ri', '2p': 'avez ri', '3p': 'ont ri' }
            },
            'marcher': {
                presente: { '1s': 'marche', '2s': 'marches', '3s': 'marche', '1p': 'marchons', '2p': 'marchez', '3p': 'marchent' },
                passado: { '1s': 'ai marché', '2s': 'as marché', '3s': 'a marché', '1p': 'avons marché', '2p': 'avez marché', '3p': 'ont marché' }
            },
            'conduire': {
                presente: { '1s': 'conduis', '2s': 'conduis', '3s': 'conduit', '1p': 'conduisons', '2p': 'conduisez', '3p': 'conduisent' },
                passado: { '1s': 'ai conduit', '2s': 'as conduit', '3s': 'a conduit', '1p': 'avons conduit', '2p': 'avez conduit', '3p': 'ont conduit' }
            },
            'voyager': {
                presente: { '1s': 'voyage', '2s': 'voyages', '3s': 'voyage', '1p': 'voyageons', '2p': 'voyagez', '3p': 'voyagent' },
                passado: { '1s': 'ai voyagé', '2s': 'as voyagé', '3s': 'a voyagé', '1p': 'avons voyagé', '2p': 'avez voyagé', '3p': 'ont voyagé' }
            },
            'raconter': {
                presente: { '1s': 'raconte', '2s': 'raconter', '3s': 'raconte', '1p': 'racontons', '2p': 'racontez', '3p': 'racontent' },
                passado: { '1s': 'ai raconté', '2s': 'as raconté', '3s': 'a raconté', '1p': 'avons raconté', '2p': 'avez raconté', '3p': 'ont raconté' }
            },
            'écrire': {
                presente: { '1s': 'écris', '2s': 'écris', '3s': 'écrit', '1p': 'écrivons', '2p': 'écrivez', '3p': 'écrivent' },
                passado: { '1s': 'ai écrit', '2s': 'as écrit', '3s': 'a écrit', '1p': 'avons écrit', '2p': 'avez écrit', '3p': 'ont écrit' }
            },
            'lire': {
                presente: { '1s': 'lis', '2s': 'lis', '3s': 'lit', '1p': 'lisons', '2p': 'lisez', '3p': 'lisent' },
                passado: { '1s': 'ai lu', '2s': 'as lu', '3s': 'a lu', '1p': 'avons lu', '2p': 'avez lu', '3p': 'ont lu' }
            },
            'acheter': {
                presente: { '1s': 'achète', '2s': 'achètes', '3s': 'achète', '1p': 'achetons', '2p': 'achetez', '3p': 'achètent' },
                passado: { '1s': 'ai acheté', '2s': 'as acheté', '3s': 'a acheté', '1p': 'avons acheté', '2p': 'avez acheté', '3p': 'ont acheté' }
            },
            'vendre': {
                presente: { '1s': 'vends', '2s': 'vends', '3s': 'vend', '1p': 'vendons', '2p': 'vendez', '3p': 'vendent' },
                passado: { '1s': 'ai vendu', '2s': 'as vendu', '3s': 'a vendu', '1p': 'avons vendu', '2p': 'avez vendu', '3p': 'ont vendu' }
            }
            }    

