let num = [5, 8, 9, 4, 6, 2]
num.sort()
for(let pos in num){
console.log(`Na posição ${pos} tem um valor de ${num[pos]}`)
}

/*
let num = [5, 8, 2, 9, 3]
num.sort()
for(let posicao = 0 ;posicao<num.length  ;posicao++  ){
console.log(`A posição ${posicao} tem o valor de ${num[posicao]}`)
}*/

/*let num = [5, 8, 2, 9, 3]
num.push(1, 4, 6, 7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`A primeira posição do vetor e ${num[0]}`)

num[3] = 6//entra colchetes a posicao a ser adicionada e depois do = o valor a ser adicionado
num.push(10)//para adicionar um elemento na ultima posiçao so array/vetor
num.length//comprimento do vetor/array quantos espaços tem
num.sort()//orderna na ordem crescente
num.indexOf(7)// busca o valor entre parenteses na posicao que ele esta   */