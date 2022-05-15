function tabuada(){
    let txtnumber = document.getElementById('numero')
    let txttabuada = document.getElementById('resultado')
    if(txtnumber.value == 0){
        alert('[ERRO] Verifique se preencheu o campo corretamente.')
    } else{
        let number = Number(txtnumber.value)
        txttabuada.innerHTML = ' '
        for(let cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            let resultado = number * cont 
            item.text = `${number} x ${cont} = ${resultado}`
            item.value = `txttab${cont}` //JavaScript não faz mt uso, mas outras linguagens como php fazem e por isso é importante definir um value pras tags que suportam isso.
            txttabuada.appendChild(item)
        }
    }

}