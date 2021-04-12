function parimp(n) {
    if (n%2 == 0){
        return'par'
    } else {
        return 'impar'
    }
}

let res = parimp(284)

console.log(res)

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(-5,-1))
console.log(soma(5))