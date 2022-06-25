let num = [5, 8, 2, 9, 3]
num.push(1, 4)
num.sort()
console.log(num)

console.log(`O vetor tem ${num.length} posições`) 

console.log(`A primeira posição do vetor e ${num[0]}`)
let pos = num.indexOf(1)

if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor esta na posição ${pos}`)

}