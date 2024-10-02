const containerCard = document.querySelector('#cards');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const card = [...document.querySelectorAll('.card')];

id=1;

function construir() {
    containerCard.innerHTML += `
        <div class="card">
            <div class="livro"></div>
        </div>        
    `;

    id++;
}

for(i=0; i<5;i++){
    construir();
}

// function focar(){
//    containerCard.children[2].classList.add('focar');
// }

function acharElementos(){
    let cardPrevious = containerCard.children[2].previousElementSibling;
    let cardNext = containerCard.children[2].nextElementSibling;

    cardNext.classList.remove('focar')
    cardPrevious.classList.remove('focar')
    return [cardPrevious,cardNext];
}

function sumir(){
    let elem = acharElementos();
    elem[0].previousElementSibling.classList.add('sumir')
    elem[1].nextElementSibling.classList.add('sumir')

}

function aparecer(){
    let elem = acharElementos();
    elem[0].classList.remove('sumir')
    elem[1].classList.remove('sumir')
}



function moverNext(){

    acharElementos();

    const primeElem = containerCard.firstElementChild;
    containerCard.firstElementChild.remove();
    containerCard.appendChild(primeElem)
    sumir();
    aparecer();
    // focar();
}

function moverPrev(){

    acharElementos();

    const primeElem = containerCard.firstElementChild;
    const lastElem = containerCard.lastElementChild;
    containerCard.lastElementChild.remove();
    containerCard.insertBefore(lastElem,primeElem);
    aparecer();
    sumir();
    // focar()
}
btnPrev.addEventListener('click', moverPrev)

btnNext.addEventListener('click',moverNext)

// focar();
sumir();