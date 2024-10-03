// exeplo de local para colocar o componente

function certeza(){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: true
  });
  swalWithBootstrapButtons.fire({
    title: "Deseja realmente cancelar?",
    text: "Essa ação é irreversivel!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Remover",
    cancelButtonText: "Cancelar",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Removido!",
        text: "O pedido foi removido.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Mantendo o pedido..",
        icon: "error"
      });
    }
  });
  }

  function confirm(){
    Swal.fire({
    title: "Confirmado",
    text: "o pedido foi confirmado com sucesso",
    icon: "sucess"
  });
  }


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
                <button class="confirm-pedido">
                    Aceitar
                </button>
                <button class="cancel-pedido">
                    Recusar
                </button>
            </div>
        </section>
        `;
    }
}

construir(5)
