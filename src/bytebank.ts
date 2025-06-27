let saldo = -666
const elementoValorSaldo = document.querySelector(".saldo-valor span.valor")
const elementoFormulario = document.querySelector(".block-nova-transacao form")

elementoValorSaldo.textContent = saldo


elementoFormulario.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos")
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao")
    const inputValorTransacao = elementoFormulario.querySelector("#valor")
    const inputDataTransacao = elementoFormulario.querySelector("#data")

    let tipoTransacao = inputTipoTransacao.value
    let valor = inputValorTransacao.value
    let data = inputDataTransacao.value

    switch (tipoTransacao) {
        case "Depósito":
            saldo += valor
elementoValorSaldo.textContent = saldo

            break;
        case "Transferência":
        case "Pagamento de Boleto":
            saldo -= valor
elementoValorSaldo.textContent = saldo

            break;
        default:
            alert("Pagamento inválido")
            return
    }

    const novaTransacao = {
        tipoTransacao,
        valor,
        data
    }
    console.log(novaTransacao)
    elementoFormulario.reset()

})