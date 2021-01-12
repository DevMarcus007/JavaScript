var idade = 64
console.log(`Você tem ${idade} anos`)
if (idade <18) {
    console.log('Menor de Idade')
} else {
    console.log('Maior de Idade')
}
console.log('-------------------------------')

if (idade < 18 || idade >65) {
    console.log('Voto opcional')
} else if (idade < 16){
        console.log('Não Vota')
} else {
        console.log('Voto Obrigatório')
}

console.log('-------------------------------')

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia')
} else if (hora < 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
