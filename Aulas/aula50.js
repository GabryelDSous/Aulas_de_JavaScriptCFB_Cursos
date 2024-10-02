const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]
p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML=elementos_array.reduce((retorno,atual,posi)=>{
        ant.push(retorno)
        atu.push(atual)
        dobro.push(atual*2)
        return retorno+atual
    })
    resultado.innerHTML+="<br/>V.anterior: "+ant+"<br/>V.atual: "+atu+"<br/>V.Dobro: "+dobro
})

