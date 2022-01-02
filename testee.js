
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



