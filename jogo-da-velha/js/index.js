const jogador1 = 'X'
const jogador2 = 'O'
let vezDeJogada = undefined
let numeroDeJogadas = 0
let valores = []
let fimDeJogo = false
let reiniciar = document.getElementById('reiniciar')

reiniciar.addEventListener('click',()=>{
    numeroDeJogadas = 0
    fimDeJogo = false
    for(let cont = 0; cont <= 8; cont++){
        valores[cont] = (document.getElementById('valor'+[cont+1])).innerHTML = '' //Limpa o conteúdo presente no HTML
    }
    while(valores.length){
        valores.pop() //Limpa o array
    }
    for(let cont = 0; cont <= 8; cont++){
        valores.push(document.getElementById('valor'+[cont+1]))
    }
})

for (let cont = 1; cont <= 9; cont++) {
    valores.push(document.getElementById('valor'+[cont]))
    valores[cont-1].addEventListener('click',clicar)
}

async function clicar(){
    if(fimDeJogo == true) return
    console.log(valores)
    let indice = Number(valores.indexOf(this)) 
    if(this.innerHTML.length !== 0){alert('[ERRO] Jogada Inválida!'); return}
    vezDeJogada = verificarJogada()
    if(vezDeJogada == 1) {valores[indice] = jogador1; this.innerHTML = `<p>${jogador1}</p>`}
    else{valores[indice] = jogador2; this.innerHTML = `<p>${jogador2}</p>`}
    if(verificarVitoria() == 1) {
        await espera(45)
        alert(`Jogador ${valores[indice]} Venceu!`);console.log(`Jogador ${valores[indice]} Venceu!`); fimDeJogo = true
    }
    else if(verificarVitoria() == 0 && numeroDeJogadas == 9){
        await espera(40)
        alert(`Velha!`)
    }
    console.log(numeroDeJogadas)
}

function verificarJogada(){
    numeroDeJogadas++
    if(numeroDeJogadas % 2 == 0) return 2 //Jogador O
    else return 1 //Jogador X
}

function verificarVitoria(){
    if(valores[0] == valores[1] && valores[0] == valores[2] && valores[0] !== '') return 1 //linha1
    if(valores[3] == valores[4] && valores[3] == valores[5] && valores[3] !== '') return 1 //linha2
    if(valores[6] == valores[7] && valores[6] == valores[8] && valores[6] !== '') return 1 //linha3
    if(valores[0] == valores[3] && valores[0] == valores[6] && valores[0] !== '') return 1 //coluna1
    if(valores[1] == valores[4] && valores[1] == valores[7] && valores[1] !== '') return 1 //coluna2
    if(valores[2] == valores[5] && valores[2] == valores[8] && valores[2] !== '') return 1 //coluna3
    if(valores[0] == valores[4] && valores[0] == valores[8] && valores[0] !== '') return 1 //diagonal1
    if(valores[2] == valores[4] && valores[2] == valores[6] && valores[2] !== '') return 1 //coluna1
    return 0 //empate
}

function espera(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}