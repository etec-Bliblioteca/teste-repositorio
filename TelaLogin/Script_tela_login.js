const input  = [...document.querySelectorAll('.input')];

input.map((el)=>{
    el.addEventListener('click', ()=>{

        el.classList.add('ativo')

        console.log(el.previousElementSibling)
        const label = el.previousElementSibling;
        
        label.classList.remove('descer');
        label.classList.add('subir')
    })
    
    el.addEventListener('focusout',()=>{
        const label = el.previousElementSibling;
        if(el.value == ''){

            el.classList.remove('ativo')

            label.classList.remove('subir');
            label.classList.add('descer');
        }
    })
})

const registrar = document.querySelector('#btnRegistrar');

registrar.addEventListener('click',()=>{
    input.map((el)=>{

        const label = el.previousElementSibling;

        if(el.value == ''){
            el.classList.remove('ok')
            el.classList.add('errado')

            label.classList.remove('ok')
            label.classList.add('errado')

        } else{
            el.classList.remove('errado')
            el.classList.add('ok')

            label.classList.remove('errado')
            label.classList.add('ok')
        }
    })
})

const mudar = document.querySelector('#mudar')

mudar.addEventListener('pointerenter',()=>{
    
})