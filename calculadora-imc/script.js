let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let botao = document.querySelector('.botao')
let texto = document.querySelector('.resultado-imc')

botao.addEventListener('click',()=>{
    let alturaDigitada = Number(altura.value) 
    let pesoDigitado = Number(peso.value) 
    let imc = pesoDigitado / (alturaDigitada * alturaDigitada)
    texto.innerHTML = 'Seu IMC é : ' + imc.toFixed(2)

})
