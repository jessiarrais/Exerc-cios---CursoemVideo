function contar() {
    let inicial = document.getElementById('inic')
    let final = document.getElementById('end')
    let passos = document.getElementById('pass')
    let res = document.getElementById('res')

    if (inicial.value.length ==0 || final.value.length == 0 || passos.value.length == 0) {
        res.innerHTML =`Impossível contar!` 
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicial.value)
        let f = Number(final.value)
        let p = Number(passos.value)

        if (p <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p =1
        }

        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p ) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    
} 
