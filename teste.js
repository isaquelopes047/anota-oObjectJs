
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

class clientePolp extends cliente{
    constructor(nome, email, cpf, saldo, saldoPolp){

        super(nome, email, cpf, saldo);
        this.saldoPolp = saldoPolp;
    }

    depositar(valor){
        this.saldoPolp += valor;
    }
}

const clietePolpanca = new clientePolp(
    "Bianca",
    "BiancaBlaska@gmail.com",
    "123.234.345-06",
    100,
    200
)

const clienteUm = new cliente(
    "Isaque",
    "isaque.lopes0@gmail.com",
    "123.234.345-06",
    100
)

clietePolpanca.depositar(1345)
console.log(clietePolpanca)