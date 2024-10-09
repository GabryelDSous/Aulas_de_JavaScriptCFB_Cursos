const caixa=document.querySelector("#caixa")
// const canal="CFB-Cursos"
// const curso="Javascript"
// caixa.innerHTML="Este é o curso de: "+curso+". Do canal: "+canal
// const frase=`Este é o curso <br>de ${curso} do canal <br>${canal}`
// console.log(`Este é o curso \nde ${curso} do canal \n${canal}`)
// caixa.innerHTML=frase

const personagens=['Kiana','Mei','Bronya','Seele']
let ul=`<ul>`
personagens.map(el=>{
    ul+=`<li>${el}</li>`
})
ul+`</ul>`
caixa.innerHTML=ul