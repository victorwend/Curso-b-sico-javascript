function gerar(){
let num = document.getElementById('num1')
let tab = document.getElementById('seltab')
if (num.value.length == 0){
    window.alert('Digite um numero!')
} else{
    //linha abaixo converte a variavel num que e str para numero.
    let n = Number(num.value)
    let c = 1
    //funçao abaixo e para limpar a tabuada a cada nova
    tab.innerHTML = ''
    while(c <=10){
        //para criar um elemento no HTML que recebe opçoes.
        let item = document.createElement('option') 
        item.text = `${n} x ${c} = ${n*c}`
        //comando abaixo marca a linha q clicar na caixa 
        tab.value = `tsb${c}`
        //para aparecer o resultado da multiplicação na tela do usuario
        tab.appendChild(item)
        c++
        }
        
    }
}/*
    function gerar(){
        var num = document.getElementById('num1')
        var tab = document.getElementById('seltab')
        if(num.value.length == 0){
            window.alert('Digite um numero!')
        }else{
            var n = Number(num.value)
            for(c = 1 ;c <= 10 ;c++ )
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.a
            
        }
    }
*/