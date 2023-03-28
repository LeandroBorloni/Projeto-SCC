let inputConsultoria = document.querySelector("#consultoria")
let inputVistoria = document.querySelector("#vistoria")
let inputDocumentacao = document.querySelector("#documentacao")

inputConsultoria.addEventListener("change", atualizarPreco)
inputVistoria.addEventListener("change", atualizarPreco)
inputDocumentacao.addEventListener("change", atualizarPreco)

function atualizarPreco(){
    let consultoria = inputConsultoria.checked
    let vistoria = inputVistoria.checked
    let documentacao = inputDocumentacao.checked
    let precoBase = 700
    let preco = 0

    if (consultoria) preco += precoBase * 2.2
    if (vistoria) preco += precoBase * 1.3
    if (documentacao) preco += precoBase * 1.1
    
    
    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}