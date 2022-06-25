var agora = new Date()
var hora = agora.getUTCHours()
console.log(`agora sao exatamente ${hora} horas.`)
if (hora <= 4 ){
    console.log('boa madrugada')
} else if(hora < 12){
    console.log('bom dia')
}

else if (hora <=18){
    console.log('boa tarde')
}else {
    console.log('boa noite')
} 
