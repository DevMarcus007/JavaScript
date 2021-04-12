function Contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var result = document.getElementById ('result')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        result.innerHTML = "Impossível Contar"
        window.alert('[ERRO] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        var i = Number (ini.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }

        if (i <= f) {
            for (var c = i; c<=f; c+=p) {
                result.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (var c = i; c>=f; c-=p) {
                result.innerHTML += `${c} \u{1F449} `
        }    
        result.innerHTML += `\u{1F3C1}`
        }
    }
}

