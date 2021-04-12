// FUNÇÃO RECURSIVA
function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(1))


// MESMA FUNÇÃO SEM RECURSÃO

function fatorial2(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(4)