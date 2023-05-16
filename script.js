const quizData = [
    {
        question: 'Quem criou o linux ?',
        a: 'Steve Jobs',
        b: 'Linus Torvalds',
        c: 'Bill Gates',
        d: 'Minux Ricard',
        correct: 2
    }, 
    {
        question: 'Qual dessas é uma lingugem de programção ?',
        a: 'Java',
        b: 'Script x',
        c: 'Reval',
        d: 'Maria',
        correct: 1
    }, 
    {
        question: 'Quando a empresa Microsoft foi fundada ?',
        a: '1974',
        b: '1975',
        c: '1976',
        d: '1985',
        correct: 2
    }, 
    {
        question: 'HTML é uma linguagem de:',
        a: 'Programação',
        b: 'Edição de texto',
        c: 'Desenvlvimento web',
        d: 'Marcação',
        correct: 4
    }, 
    {
        question: 'Qual nome do brasileiro que foi o Co-fundador do Facebook',
        a: 'Jorge Paulo Lemann',
        b: 'Cristina Junqueira',
        c: 'Eduardo Saverin',
        d: 'Fabio Akita',
        correct: 3
    },
    {
        question: 'Qual núcleo é usado no sistema Android?',
        a: 'Minix',
        b: 'Haiku',
        c: 'FreeDOS',
        d: 'Linux',
        correct: 4
    },
    {
        question: 'Sobre a CPU podemos afirmar:',
        a: 'É uma unidade de entrada.',
        b: 'É uma unidade de saída ',
        c: 'É uma unidade de processamento',
        d: 'Nenhuma das alternativas',
        correct: 3
    },
    {
        question: 'Oque hardware representa?',
        a: 'O sistema operacional',
        b: 'Programa e aplicações',
        c: 'Significa informatica em inglês',
        d: 'nenhuma das alternativas',
        correct: 4
    },
    {
        question: 'O que é necessário para acessar um site?',
        a: 'É necessario ter acesso ao paint',
        b: 'Conexão com a internet',
        c: 'Um bloco de notas',
        d: 'O jogo campo minado',
        correct: 2
    },
    {
        question: 'Como melhorar o desempenho do computador?',
        a: 'Comprando um mouse e teclado',
        b: 'Adicionando RGB',
        c: 'Adicionando mais memoria RAM e um SSD',
        d: 'Adicionando um monitor novo',
        correct: 3
    },
    {
        question: 'Quem é dono da empresa  Google?',
        a: 'Alphabet',
        b: 'Meta',
        c: 'Microsoft',
        d: 'Atacadão',
        correct: 1 
    },
    {
        question: 'Quem criou o primeiro computador pessoal?',
        a: 'Steve Jobs',
        b: 'Bill Gates',
        c: 'James Gosling',
        d: 'Mark Zuckerberg',
        correct: 1
    },
    {
        question: 'Quem foram os criadores da Microsoft?',
        a: 'Bill Gates e Paul Allen',
        b: 'Elon Musk e Steve Jobs',
        c: 'Bill Gates e Steve Jobs',
        d: 'Elon Musk e Paul Allen',
        correct: 1
    },
    {
        question: 'Qual destas alternativas abaixo é um sistema operacional?',
        a: 'Linux, Cluster e Windows ',
        b: 'Ios, Paginação e Softwares ',
        c: 'Linux, Windows e  Mac OS',
        d: 'Nenhuma das alternativas',
        correct: 3
    },
    {
        question: 'Qual sistema operacional de smartphones mais usado no mundo? ',
        a: 'Android',
        b: 'Ios',
        c: 'Windows',
        d: 'Sun Microsystem',
        correct: 1 
    },
    {
        question: 'Quais principais periféricos de um computador? ',
        a: 'HD , placa mãe e entrada USB',
        b: 'Monitor, impressora e cabo HDMI',
        c: 'Mouse, teclado e fone de ouvido ',
        d: 'Cabo de rede, headset e controle',
        correct: 3
    },
    {
        question: 'Qual a memoria principal do computador?',
        a: 'HD externo',
        b: 'SSD',
        c: 'Processador',
        d: 'Memoria Ram',
        correct: 4
    },
    {
        question: 'Qual das alternativa a baixo não é um sistemas operacionais?',
        a: 'Android',
        b: 'Ubuntu',
        c: 'Windows',
        d: 'Oracle',
        correct: 4
    },
    {
        question: 'Em que pais foi criado o primeiro celular?',
        a: 'Japão',
        b: 'Itália',
        c: 'Estados Unidos da America',
        d: 'China',
        correct: 3
    },
    {
        question: 'Qual das seguintes versões do windows foi lançado apos o Windows XP?',
        a: 'Windows 7',
        b: 'Windows Vista',
        c: 'Windows 11',
        d: 'Windows 95',
        correct: 1
    }
]

const questionTitle = document.getElementById('question')

//Label
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')

//Input
const radio = document.getElementsByName('resposta')

//Button
const submitBtn = document.getElementById('submit')


let numRandom = Math.floor(Math.random() * quizData.length);

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[numRandom]
    questionTitle.innerHTML = currentQuizData.question

    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

let A = document.getElementById(1);
let B = document.getElementById(2);
let C = document.getElementById(3);
let D = document.getElementById(4);

function verificar(){
    const currentQuizData = quizData[numRandom]
   if(A.checked){
        let num = 1  
        if(currentQuizData.correct == num){
            window.alert("Resposta correta")
        }else{
            window.alert("Resposta errada")
        }
   }else if(B.checked){
        let num = 2  
        if(currentQuizData.correct == num){
            window.alert("Resposta correta")
        }else{
            window.alert("Resposta errada")
        }
   }else if(C.checked){
        let num = 3 
        if(currentQuizData.correct == num){
            window.alert("Resposta correta")
        }else{
            window.alert("Resposta errada")
        }
   }else if(D.checked){
        let num = 4
        if(currentQuizData.correct == num){
            window.alert("Resposta correta")
        }else{
            window.alert("Resposta errada")
        }
   }else{
        window.alert("VC NAO MARCOU NADA")
   }
}

function refresh(){
    window.location.reload(true);
}