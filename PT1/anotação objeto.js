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




