function carregar () {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('txt')
    var data = new Date ()
    var hora = data.getHours()
   // var hora =19

    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        //Bom dia!
        img.src = './images/manha.png'
        document.body.style.background= '#ddc297'
        txt.innerHTML = `Bom Dia!`
    } else if (hora >= 12 && hora <= 18) { 
        //Boa tarde!
        img.src = './images/tarde.png'
        document.body.style.background = '#fbc034'
        txt.innerHTML = `Boa Tarde!`
    } else {
        //Boa noite!
        img.src = './images/noite.png'
        document.body.style.background = '#0f1022'
        txt.innerHTML = `Boa Noite!`
    }
        
}