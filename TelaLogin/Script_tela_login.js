const input  = [...document.querySelectorAll('.input')];

input.map((el)=>{
    el.addEventListener('click', ()=>{
        console.log(el.previousElementSibling)
        const label = el.previousElementSibling;

        label.classList.add('subir')
    })
})