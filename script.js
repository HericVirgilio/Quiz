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
        a: 'Julia',
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
        question: 'Analise as seguintes frases e assinale a alternativa correta: I. Conjunto de programas. II. Usuários ou profissionais em TI. III. Parte física do computador.',
        a: 'I- Hardware, II- Software, III- Firmware.',
        b: 'I- Hardware, II- Software, III- Firmware.',
        c: 'I- Software, II- Peopleware, III- Hardware.',
        d: 'I- Software, II- Tupperware, III- Firmware.',
        correct: 3
    }, 
    {
        question: 'Se um profissional está criando um site em HTML e ele quiser colocar uma barra horizontal em sua página, qual tag ele deve usar?',
        a: '<line></line>',
        b: '<hr></hr>',
        c: '<br></br>',
        d: '<hr/>',
        correct: 4
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
        question: 'Qual das seguintes variáveis só aceita números inteiros?',
        a: 'Long',
        b: 'Interger',
        c: 'Double',
        d: 'String',
        correct: 1
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
        question: 'Quando iniciamos um arquivo HTML, vemos que nele contem um meta charset="UTF-8" para que serve?',
        a: 'Tem a função de importar um arquivo ao qual faz a paginação ser possivel',
        b: 'Diz ao Navegador qual é o local holst que esta sendo utilizado',
        c: 'É uma tag utilizada para comunicar aos navegadores qual é o formato de codificação de caracteres utilizado naquele documento',
        d: 'É um anglicismo que se refere a um tipo de análise tipográfica da informática.',
        correct: 3
    },
    {
        question: 'Qual núcleo é usado no sistema Android',
        a: 'Minix',
        b: 'Haiku',
        c: 'FreeDOS',
        d: 'Linux',
        correct: 4
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


let currentQuiz = 0
let score = 0
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