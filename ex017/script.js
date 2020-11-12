function gerar() {
   let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
   
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número')       
    } else {
        let n = Number(num.value)     
        let c = 1

        tab.innerHTML = ''
        // while (c <=10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        //     c++
       
         for (var r = c ;
             r <= 10
             ; r++) {
                let item = document.createElement('option')
                item.text = `${n} x ${r} = ${n*r}`
              item.value = `tab${r}`
               tab.appendChild(item)  

     } 
}
        }
   // }
   
    
    