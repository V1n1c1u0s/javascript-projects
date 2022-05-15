let txtnumber = document.getElementById('txtnumber')
let explicacao = document.getElementById('explication')
let select = document.getElementById('caixainfo')
let numero = []
function verificarnumero(num){
    if(num >= 1 && num <= 100){
        return true
    } else{
        return false
    }
}
function verificarlista(num,lista){
    if(lista.indexOf(num) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    let number = Number(txtnumber.value)  
    if(verificarnumero(number) && !verificarlista(number,numero)){
        numero.push(number)
        let option = document.createElement('option')
        option.innerText = `Valor ${numero[numero.length-1]} adicionado`
        select.appendChild(option)
    }else{
        alert('[ERRO] Valor Inválido ou repetido!')
    }
    txtnumber.value = ''
    txtnumber.focus()
}

function finalizar(){
    if(numero.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let paragrafo = document.createElement('p')
        explicacao.innerHTML = ''
        let soma = 0,media = 0, maior = numero[0], menor = numero[0]
        for(let pos in numero){
            soma += numero[pos]
            if(numero[pos] > maior){
                maior = numero[pos]
            }
            if(numero[pos] < menor){
                menor = numero[pos]
            }
        }
        media = soma/numero.length
        paragrafo.innerHTML += `<p>Ao todo, temos ${numero.length} números cadastrados.</p>`
        paragrafo.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        paragrafo.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        paragrafo.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        paragrafo.innerHTML += `<p>A média dos valores é ${media}.</p>`
        explicacao.appendChild(paragrafo)
    }
}