// let convidado = { Nome: "", Idade: "", Email: "" }
let listaDeConvidados = []

function atualizarLista() {
    // Pegar o tbody #lista
    let lista = document.getElementById("lista")
        // limpar o tbody
    lista.innerHTML = ""
        // adicione os elementos do vetor listaDeConvidados
    for (i = 0; i < listaDeConvidados.length; i++) {
        lista.innerHTML += `
        <tr id="indice${i}">
            <td scope="row">${i+1}</td>
            <td>${listaDeConvidados[i].Nome}</td>
            <td>${listaDeConvidados[i].Idade}</td>
            <td>${listaDeConvidados[i].Email}</td>
            <td><button type="button" onclick="remover(${i})" class="btn btn-danger">Remover</button></td>
        </tr>
        `
    }
}

function remover(indice) {
    // remover o indice indicado do vetor listaDeConvidados
    listaDeConvidados.splice(indice, 1)

    // atualaizar o HTML
    atualizarLista()
}

function limparCampos() {
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("email").value = ""
}

function adicionar() {
    // pegar os valores 
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
        // adicionar no objeto convidado
    let convidado = { Nome: "", Idade: "", Email: "" }
    convidado.Nome = nome
    convidado.Idade = idade
    convidado.Email = email
        // limpar campos de texto
    limparCampos()
        // adicionar no vetor listaDeConvidados
    listaDeConvidados.push(convidado)
        // atualizar o HTML
    atualizarLista()
}