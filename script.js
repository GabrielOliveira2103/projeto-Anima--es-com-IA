
let webhook = "https://gabrieldev25.app.n8n.cloud/webhook/animacao-css"

let codigo=document.querySelector(".area-codigo")

let areaResultado=document.querySelector(".area-resultado")

async function cliqueinobotao() {

    let textoinput = document.querySelector(".input-animacao").value

    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: textoinput })
    })

    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    codigo.innerHTML=info.code

    areaResultado.innerHTML = info.preview
    document.head.insertAdjacentHTML('beforeend', "<style>"+ info.style+"</style>")
}


