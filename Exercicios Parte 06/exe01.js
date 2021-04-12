function Gerar() {
    var numero = document.getElementById('txtn')
    var resultado = document.getElementById('seltab')
    
    if (numero.value.length == 0) {
        window.alert("Por Favor, digite um número!")
    } else {
        var n = Number (numero.value)
        var c = 1
        resultado.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            resultado.appendChild(item)
            c++
        }        
    }
}