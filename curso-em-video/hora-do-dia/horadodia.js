function carregar(){
    let mensagem = document.getElementById('mensagem')
    let verificarHora = new Date()
    let hora = verificarHora.getHours()
    let minuto = verificarHora.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}h e ${minuto}m`
    let img = document.getElementById('imagem')
    if(hora > 0 && hora < 12){
        mensagem.innerHTML += '<br>Bom dia!'
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#B0C4DE'
    } else if( hora >= 12 && hora < 18){
        mensagem.innerHTML += '<br>Boa Tarde!'
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#66CDAA'
    } else if(hora >= 18 && hora < 24){
        mensagem.innerHTML += '<br>Boa Noite!'
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#191970'
    } else{
        console.log("ERRO!")
    }
}