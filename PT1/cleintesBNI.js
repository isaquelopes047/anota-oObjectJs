const { threadId } = require("worker_threads");


const dadosBNI = {
    nome: 'BNI - Banco Nacional do Isaque',
    cnpj: '11.167.125/0001-27',
    endereco: [{
        filialUm: [{
            Pais: 'Brasil',
            Estado: 'Santa Catarina',
            Cidade: 'Joinville',
            Bairro: 'Santa Maria',
            Rua: 'José Feliciano Coelho'
        }],
    }],
    clientes: [{
        Bianca: [{
            nome: 'Bianca',
            cpf: '115.595.599-06',
            rg: '35.918.278-1',
            idade: 20,
            saldo: 0,
            email: 'biancablaska@gmail.com',
            endereco: [{
                rua: 'Lucio Brugnago',
                casa: 211,
                bairro: 'Jarim los Angeles',
                cidade: 'Barra Velha',
                cep: '88134000',
            }],
        }],
        Isaque: [{
            nome: 'Isaque',
            cpf: '215.515.499-06',
            rg: '25.918.178-2',
            idade: 23,
            saldo: 0,
            email: 'isaquelopes@gmail.com',
            endereco: [{
                rua: 'Lucio Brugnago',
                casa: 212,
                bairro: 'Jarim Angeles',
                cidade: 'Barra Velha',
                cep: '88134000',
            }],
        }]
    }],
}
dadosBNI.clientes.forEach(clientes => console.log(clientes));