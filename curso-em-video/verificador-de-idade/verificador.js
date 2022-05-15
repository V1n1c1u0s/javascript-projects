function verificar() {
    let ano = new Date()
    let anoatual= ano.getUTCFullYear()
    let datanasc = document.getElementById('datanasc')
    let sexo = document.getElementsByName('sexo')
    let img = document.createElement('img')
    let resultado = document.getElementById('resultado')
    let genero = ' '
    if(datanasc.value.length == 0 || datanasc.value > anoatual){
        alert('Verifique se os dados estão corretos!')
    } else{
        idade = anoatual - datanasc.value
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','img/foto-bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src','img/foto-jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src','img/foto-adulto-m.png')
            } else{
                img.setAttribute('src','img/foto-idoso-m.png')
            }
        } else if(sexo[1].checked){
            genero ='Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','img/foto-bebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src','img/foto-jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src','img/foto-adulto-f.png')
            } else{
                img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    resultado.appendChild(img)
}