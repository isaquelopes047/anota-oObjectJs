

// modelo para criação de objeto
// classe define propriedade e comportamento de objeto ( metodos ) 

// CLASSE PESSOA
class pessoa {
    constructor(nome, cpf, telefone){

        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
}

// CLASSE IDADE
// note que nessa classe estou usando herança que vem da classe PESSOA
// o super reescreve os dados adicionando o novo dado idade
class idadePessoa extends pessoa {
    constructor(nome, cpf, telefone, idade){

        super(nome, cpf, telefone, idade);
        this.idade = idade;
    }
}

// CRIO O NOVO OBJETO COM TODOS OS DADOS
const Isaque = new idadePessoa(
    "Isaque",
    "123.234.345-54",
    "(47) 999078865",
    16
)

console.log(Isaque)

// METODOS EM CLASSES
class cliente {
    constructor(nome, email, cpf, saldo){

        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        this.saldo - valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const clienteUm = new cliente(
    "Isaque",
    "isaque.lopes0@gmail.com",
    "123.234.345-06",
    100
)

clienteUm.sacar(300);
console.log(clienteUm)

