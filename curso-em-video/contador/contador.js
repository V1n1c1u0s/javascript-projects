function contar(){
    let dadosInicio = document.getElementById('inicio')
    let dadosFim = document.getElementById('fim')
    let dadosPasso = document.getElementById('passo')
    let resposta = document.getElementById('resposta')
    let inicio = Number(dadosInicio.value)
    let fim = Number(dadosFim.value)
    let passo = Number(dadosPasso.value)
    if(dadosInicio.value.length == 0 || dadosFim.value.length == 0 || dadosPasso.value.length == 0){
        alert('[ERRO] Verifique os dados!')
    } else{
        if(passo <= 0){
            alert('Passo inválido! Considerando PASSO 1.')
            passo = 1;
        }
        if(inicio < fim){
            resposta.innerHTML = `Contando: `
            for(let cont = inicio; cont <= fim; cont += passo){
                resposta.innerHTML += `${cont}\u{1F449}`
            }
            resposta.innerHTML += `FIM\u{1F3C1}`
        }
        if(inicio > fim){
            resposta.innerHTML = `Contando: `
            for(let cont = inicio; cont >= fim; cont -= passo){
                resposta.innerHTML += `${cont}\u{1F449}`
            }
            resposta.innerHTML += `FIM\u{1F3C1}`
        }
    }
}