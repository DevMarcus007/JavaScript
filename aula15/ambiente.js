let num = [5,8,1,5]
num[num.length] = 6
num.push(9)
num.length

console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O array ordenado fica ${num.sort()}`)

console.log("------==----------==-------")

for (let pos = 0; pos < num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log("------==----------==-------")

for (i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}