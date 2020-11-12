function verificar() {
    
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            
            if (idade >=0 && idade <10 ) {
                // criança
                img.src ='./images/bebeM.png'
            } else if (idade < 21) {
                //jovem
                img.src ='./images/jovemM.png'
            } else if (idade <50) {
                    //adulto
                img.src ='./images/adultoM.png'
            } else {
                    //idoso
                img.src ='./images/idosoM.png'
            }
            

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
           
            if (idade >=0 && idade <10 ) {
                // criança
                img.src ='./images/bebeF.png'
            } else if (idade < 21) {
                //jovem
                img.src ='./images/jovemF.png'
            } else if (idade <50) {
                    //adulto
                img.src ='./images/adultaF.png'
            } else {
                    //idoso
                img.src ='./images/idosaF.png'
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}