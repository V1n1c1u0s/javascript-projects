var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d') //Fala que tudo que tá no canvas é animação 2d

var teclas = {}
var bola = {
    x: canvas.width / 2 - 15,
    y: canvas.height / 2 - 15,
    altura: 30,
    largura: 30,
    direcaox: -1,
    direcaoy: 1,
    velocidade: 4,
    modificadordevelocidade: 0
}

var esquerda = {
    x: 10,
    y: (600 / 2) - 60,
    altura: 120,
    largura: 30,
    score: 0,
    velocidade: 10
}

var direita = {
    x: 560,
    y: (600 / 2) - 60,
    altura: 120,
    largura: 30,
    score: 0,
    velocidade: 10
}

document.addEventListener("keydown",(e)=>{
    teclas[e.keyCode] = true
},false)

document.addEventListener("keyup",(e)=>{
    delete teclas[e.keyCode];
},false)

function movimentacao(){
    if(87 in teclas && esquerda.y > 0) 
        esquerda.y -= esquerda.velocidade;
    if(83 in teclas && esquerda.y + esquerda.altura < canvas.height)
        esquerda.y += esquerda.velocidade;
    if(38 in teclas && direita.y > 0) 
        direita.y -= direita.velocidade;
    if(40 in teclas && direita.y + direita.altura < canvas.height)
        direita.y += direita.velocidade;
}

function moveBola(){
    if(bola.y + bola.altura >= esquerda.y && bola.y <= esquerda.y + esquerda.altura && bola.x <= esquerda.x + esquerda.largura){
        bola.direcaox = 1
        bola.modificadordevelocidade += 0.2
    }else if(bola.y + bola.altura >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.largura >= direita.x){
        bola.direcaox = -1
        bola.modificadordevelocidade += 0.2
    }
    if(bola.y <= 0){    
        bola.direcaoy = 1
    } else if(bola.y + bola.altura >= canvas.height){
        bola.direcaoy = -1
    }

    bola.x += (bola.velocidade + bola.modificadordevelocidade) * bola.direcaox
    bola.y += (bola.velocidade + bola.modificadordevelocidade) * bola.direcaoy

    if(bola.x < esquerda.x + esquerda.largura - 15) 
        novoJogo("Player 2");
    else if(bola.x + bola.largura > direita.x + 15) 
        novoJogo("Player 1");
}

function novoJogo(ganhador){
    if(ganhador == "Player 1") 
        ++esquerda.score
    else if(ganhador == "Player 2") 
        ++direita.score

    esquerda.y = canvas.height / 2 - esquerda.altura / 2
    direita.y = esquerda.y
    bola.y = canvas.height / 2 - bola.altura / 2
    bola.x = canvas.width / 2 - bola.largura / 2
    bola.modificadordevelocidade = 0
}

function desenha(){
    ctx.clearRect(0,0,600,600);
    movimentacao()
    moveBola()
    ctx.fillStyle = "white" //Tudo que for "desenhado aqui terá a cor branca"
    ctx.fillRect(esquerda.x,esquerda.y,esquerda.largura,esquerda.altura) //fillRect() desenha na tela(posicaox,posicaoy,larguradodesenho,alturadodesenho)
    ctx.fillRect(direita.x,direita.y,direita.largura,direita.altura)
    ctx.fillRect(bola.x,bola.y,bola.largura,bola.altura)
    ctx.font = "20px Arial"
    ctx.fillText("Player 1: "+ esquerda.score,50,20)
    ctx.fillText("Player 2: "+ direita.score,canvas.width - 150,20)
}

setInterval(desenha, 15);