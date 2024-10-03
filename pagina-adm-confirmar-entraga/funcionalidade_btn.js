// exemplo de lugar para colocar as sessões
var main = document.querySelector('main')

function construir(quant){

    for(i=0; i<quant; i++){
        main.innerHTML+=`
        <section class="sessaoLivro">

        <div class="img_livro">
            <!-- simulando imagem -->
            <div id="img"></div>
        </div>

        <div class="descricao">
            <h3>
                nome do aluno
            </h3>
            <p>rm: xxxx <br>
            Turma: 2º info manha<br>
            Data de entrega: xx/xx/xxxx</p>

            <h4>
                Titulo do periférico
            </h4>
            <p>quantidade</p>
        </div>

        <div class="bloco_btn">

            <button class="btn_cancelar">
                cancelar
            </button>

            <button class="btn_confirmar">
                confirmar 
            </button>
        </div>
    </section>
        `;
    }
}

// defina a quantidade de pessoas que estão com livros agendados
construir(3);