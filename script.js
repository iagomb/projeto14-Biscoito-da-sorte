const cookie = document.querySelector('.cookie')
const btnAgain = document.querySelector('#btnAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const phraseCookie = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Siga os bons e aprenda com eles.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
    'A vida é para quem topa qualquer parada. Não para quem para em qualquer topada.',
    'Você sempre será a sua melhor companhia!',
    'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.'
]
cookie.addEventListener('click', ()=>{
    toggle()

    let phrase = Math.round(Math.random() * phraseCookie.length)

    screen2.querySelector('p').innerText = phraseCookie[phrase]
})

btnAgain.addEventListener('click', ()=>{
    toggle()
});

function toggle() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

}