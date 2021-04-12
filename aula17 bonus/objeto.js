//Criação de Objetos

let amigo = {nome: 'Jose',
             sexo: 'M',
            peso: 84.4,
            engordar(p=0){
                console.log('Engordou')
                this.peso+= p
            }}

console.log(`${amigo.nome} pesava ${amigo.peso}`)
amigo.engordar(5)
console.log(`Agora ${amigo.nome} pesa ${amigo.peso}`)
