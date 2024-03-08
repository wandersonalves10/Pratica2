const Contato = require("./modelo")

const contatos = [];

function adicionarcontato(nome, email, telefone){
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarcontatos(){
    return contatos;
}

function buscarcontato(nome){
    return contatos.find(contatos => contatos.nome === nome);
}

function atualizarcontatos(nome, email, telefone){
    const Encontrarcontatos = buscarcontato(nome)
        if(contatos){
            contatos.nome = nome;
            contatos.email = email;
            contatos.telefone = telefone;
        }
}

function removercontato(nome){
    const Index = contatos.findIndex(contato => contato.nome === nome)
        if(contatos !== -1){

        }
}

module.exports = {adicionarcontato, listarcontatos, buscarcontato, atualizarcontatos, removercontato};