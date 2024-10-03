// exeplo de local para colocar o componente
var main = document.querySelector('main');

function construir(quant){
    for(i=0; i<quant; i++){
        main.innerHTML+=`
        <section class="sessao-aceitar-login">
            <div class="informacao">
                <h3>Nome fulano</h3>
                <p> rm: xxxx <br>
                    Turma: 2º info manhã<br>
                    Email: xxxxx@gmail.com
                </p>
            </div>
            <div class="area_button">
                <button class="btn_aceitar">
                    Aceitar
                </button>
                <button class="btn_recusar">
                    Recusar
                </button>
            </div>
        </section>
        `;
    }
}

construir(5)