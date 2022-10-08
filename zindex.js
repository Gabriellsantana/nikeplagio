 var bntsalvar = document.querySelector("#envia")

 console.log(bntsalvar)

bntsalvar.addEventListener("click", function (event){
    event.preventDefault

    var frmCadastro = document.querySelector("#frmCadastro");

    console.log(frmCadastro.Nome.value)
    console.log(frmCadastro.CPF.value)
    console.log(frmCadastro.email.value)
    }) 
