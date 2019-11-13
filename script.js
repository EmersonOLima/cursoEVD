function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        res.innerHTML = 'Impossivel contar'
        window.alert('[ERRO] faltam dados!')  
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value) // pegando o valor de inicio e convertendo em numero
        let f  = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considere o passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
            //contagem decrescente
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}