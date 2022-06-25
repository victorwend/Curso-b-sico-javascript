var num = document.getElementById('numtxt')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }

}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}



function add(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado em lista.')
    }
    // abaixo para apagar a caixa a cada vez que for adicionado 
    num.value = ''
    // depois que apagar a cursor ficar piscando
    num.focus()
}

function fina(){
    if(valores.length == 0){
        window.alert('Está vazio adicione valores antes de finalizar!')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        // para verificar os valores maior e menor,soma e media
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores[pos]
        }
        //calcular a media comando abaixo
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo, temos ${tot} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> P menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores e igual a ${soma}</p>`
        res.innerHTML += `<p> A media dos valores e igual a ${media}</p>`


    }
}
