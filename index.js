const readline = require('readline-sync');

const {adicionarcontato, listarcontatos, buscarcontato, atualizarContato, removerContato, atualizarcontatos} = require('./controlador');

function Menu(){
    console.log("1. Adicionar contato: ");
    console.log("2. Listar contatos: ");
    console.log("3. Buscar contatos: ");
    console.log("4. Atualizar Contato: ");
    console.log("5. Remover contato: ");
    console.log("6. Sair: ");
}

function escolherOpcao(opção){
    switch(opção){
        case '1':
            const nome = readline.question('nome: ');
            const email = readline.question('email: ');
            const telefone = readline.question('telefone: ');
            adicionarcontato(nome, email, telefone);
            break;

        case '2':
            console.log(listarcontatos());
            break;
        
        case '3':
            const nomeBusca = readline.question('Nome do contato: ');
            const contatoEncontrado = buscarcontato(nomeBusca);
            if(contatoEncontrado){
                console.log("Contato Encontrado.");
            }else{
                console.log("Contato não encontrado.");
            }

        case '4':
            const nomeAtualizar = readline.question('Nome do contato: ');
            const novoEmail = readline.question('Novo Email: ');
            const novoTelefone = readline.question('Novo Telefone: ');
            atualizarcontatos(nomeAtualizar, novoEmail, novoTelefone);
            break;
            
        case '5':
            const nomeRemover = readline.question('Nome do contato: ');
            removercontato(nomeRemover);
            break;
            
        case '6':
            process.exit();
            default:
            console.log('Opção inválida.');
        }
    }

function main() {
     while (true) {
        Menu();
        const opção = readline.question('Escolha uma opção: ');
        escolherOpcao(opção);
        }
    }

main();