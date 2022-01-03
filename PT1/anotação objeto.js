// ADICIONAR AO OBJETO
const cliente = {
    nome: 'Isaque',
    idade: 16,
    cpf: '115.585.599-06',
    email: 'isaque,lopes0@gmail.com'
}
cliente.telefone = '(47) 99907-8865';
console.log(cliente);

// DELETAR ITEM DO OBJETO
const cliente = {
    nome: 'Isaque',
    idade: 16,
    cpf: '115.585.599-06',
    email: 'isaque,lopes0@gmail.com'
}
delete cliente.telefone;
console.log(cliente);

// EXIBIR TODOS OS DADOS DE UM CAMPO EM ARRAY
// VAMOS UTILIZAR forEach PARA PERCORRER TODO O ARRAY
const clienteDois = {
    nome: 'Bianca',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
    telefone: [
        "(47)999078865",
        "(47)990455484",
        "(47)990453123"
    ]
}
clienteDois.telefone.forEach(telefone => 
console.log(telefone));

// EXIBIR TODOS OS DADOS DE UM CAMPO EM OUTRO OBJETO
// ESTAMOS COLOCANDO OUTRO OBJETO DENTRO DO OBJETO PRINCIPAL
const cliente = {
    nome: 'Bianca',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
}
cliente.endereco = {
    rua: 'Lucio Brugnago',
    casa: 211,
    bairro: 'Jarim los Angeles',
    cidade: 'Barra Velha',
    cep: '88390000'
}

console.log(cliente)

// EXIBIR TODOS OS DADOS DE UM CAMPO EM OUTRO OBJETO COM FILTRO
/* Estamos criando um filtro para o campo de endereço onde somente
vai ser exibido um valor que for igual a cidade determinada*/
const cliente = {
    nome: 'Bianca',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
    endereco: [{
        rua: 'Lucio Brugnago',
        casa: 211,
        bairro: 'Jarim los Angeles',
        cidade: 'Barra Velha',
        cep: '88390000'
        },
        {
        rua: 'Osvaldo Aguiar',
        casa: 315,
        bairro: 'Afelis',
        cidade: 'Joinville',
        cep: '32456000'
    }]
}
const numeroMenor = cliente.endereco.filter(endereco => endereco.cidade === 'Barra Velha');
console.log(numeroMenor)

// ADICIONANDO FUNÇOES A OBJETOS
/* Estamos fazendo operaçoes matematicas no objeto.saldo
que seria como um valor na sua conta bancaria, pra isso 
utilizamos uma função, Utilizamos funçoes para dar comportamentos para os 
objetos, desde depositar, sacar... */

// METODOS
/* Metodos são funçoes que trabalham em um objeto, elas estão ligadas
ao objeto cliente nesse caso, nada mais é que um valor do objeto normal
porem com um valor de function, valor: function(algo){this.valor} */
const cliente = {
    nome: 'Bianca',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
    endereco:   [
        {
            rua: 'Lucio Brugnago',
            casa: 211,
            bairro: 'Jarim los Angeles',
            cidade: 'Barra Velha',
            cep: '88390000'},
        {
            rua: 'Osvaldo Aguiar',
            casa: 315,
            bairro: 'Afelis',
            cidade: 'Joinville',
            cep: '32456000',
        }
    ],
    saldo: 523,
    depositar:function(valor){

        this.saldo += valor
        /*o this é o proprio objeto, mesma coisa que escrever cliente.saldo, porem uma boa pratica o this*/
        /* += incremento */
    }
}
cliente.depositar(2345); //Somando 2345 ao valor inicial de 523 do this.saldo
console.log(cliente.saldo)

// FOR IN
/* For in é usado para percorrer informaçoes de um objeto */
const cliente = {
    nome: 'Bianca',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
    saldo: 523,
    endereco:   [
        {
            rua: 'Lucio Brugnago',
            casa: 211,
            bairro: 'Jarim los Angeles',
            cidade: 'Barra Velha',
            cep: '88390000'},
        {
            rua: 'Osvaldo Aguiar',
            casa: 315,
            bairro: 'Afelis',
            cidade: 'Joinville',
            cep: '32456000',
        }
    ],

    depositar:function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

/* Nós estamos querendo tirar da pesquisa os tipos object e function
então vamos fazer um if para isso */

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){

        continue;

    }else{
        relatorio += `
        ${info} ===> ${cliente[info]}
        `  
    };
}
console.log(relatorio);

// Object keys
/* Vai retornar as chaves, ele cria um Array e retorna todas as chaves do Objeto */

const cliente = {
    nome: 'Isaque',
    idade: 20,
    cpf: '147-143-811-07',
    email: 'biancablaska@gmail.com',
    saldo: 523,
    endereco:   [
        {
            rua: 'Lucio Brugnago',
            casa: 211,
            bairro: 'Jarim los Angeles',
            cidade: 'Barra Velha',
            cep: '88390000'},
        {
            rua: 'Osvaldo Aguiar',
            casa: 315,
            bairro: 'Afelis',
            cidade: 'Joinville',
            cep: '32456000',
        }
    ],
    dependentes: [{
        nome: 'Bianca',
        parentesco: 'Esposa',
        idade: 20
    }],

    depositar: function(valor){
        this.saldo += valor;
    }
}


// VERIFICAR SE UM DETERMINADO CLIENTE TEM O VALOR PASSADO NO INCLUDE
// ASSIM FAZENDO UM PESQUISA
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj) // passe o objeto para o Object.keys

    if(propsClientes.includes("dependentes")){ // include vai verificar se existe a chave no objeto, se sim, retorna true
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);


// Gerar uma função que crie novos dados 

//a função vai servir como uma função construtora
function cliente(nome, cpf, email, saldo){
    
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){

    cliente.call(this, nome,cpf,email,saldo) //CALL serve para erdar os dados de outro objeto, assim evitando de reescrever
    this.saldoPoup = saldoPoup
}

//Aqui criaremos um novo objeto com os dados do objeto cliente dando valor as chaves
const clientePop = new clientePoupanca(
    "Bianca",
    "123.234.345-03",
    "biancamaria@gmail.com",
    420,
    200
)

const novoCliente = new cliente(
    "Isaque",
    "115.585.599=06",
    "isaque.lopes0@gmail.com",
    100
)

clientePop.depositar(30);
console.log(clientePop.saldoPoup)





