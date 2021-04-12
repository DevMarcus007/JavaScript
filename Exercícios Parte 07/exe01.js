let num = document.querySelector('input#txtn')
let res = document.querySelector('select#list')
let fim = document.querySelector('div#final')
let lista=[]


// Verificar se o número é válido

function isNumero (n) {
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Verificar se o número já está na lista

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}



function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        res.appendChild(item)
        fim.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já faz parte da lista!")
    }
    num.value = ''
    num.focus()
}


// Função de resumo da lista

function Finalizar() {
    if (lista.length == 0) {
        window.alert("Lista vazia!")
    }else{
        let fim = document.getElementById('final')
        lista=lista.sort()
        let tot = lista.length
        let maior = lista[(lista.length)-1]
        let menor = lista [0]
        let soma = 0
            for (i in lista){
                soma += lista[i]
            }
        let media = soma/tot
        fim.innerHTML = ''
        fim.innerHTML += ` Ao todo, temos ${tot} números cadastrados. <br>`
        fim.innerHTML += `O maior valor informado foi ${maior}. <br>`
        fim.innerHTML += `O menor valor informado foi ${menor}. <br>`
        fim.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
        fim.innerHTML += `A média dos valores digitados é ${media}.`
    }
}
