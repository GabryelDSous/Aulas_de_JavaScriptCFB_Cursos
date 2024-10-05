const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.getElementById("btn_subtracao")
const btn_multiplicacao=document.getElementById("btn_multiplicacao")
const btn_divisao=document.getElementById("btn_divisao")
const res=document.querySelector("#res")
const opercoes=[
    ()=>{
        const resp=[document.getElementById("valor1").value,document.querySelector("#valor2").value]
        res.value=Number(resp[0])+Number(resp[1])
    },
    ()=>{
        const resp=[document.getElementById("valor1").value,document.querySelector("#valor2").value]
        res.value=Number(resp[0])-Number(resp[1])
    },
    ()=>{
        const resp=[document.getElementById("valor1").value,document.querySelector("#valor2").value]
        res.value=Number(resp[0])*Number(resp[1])
    },
    ()=>{
        const resp=[document.getElementById("valor1").value,document.querySelector("#valor2").value]
        res.value=Number(resp[0])/Number(resp[1])
    }
]
btn_soma.addEventListener("click",()=>{opercoes[0]()})
btn_subtracao.addEventListener("click",()=>{opercoes[1]()})
btn_multiplicacao.addEventListener("click",()=>{opercoes[2]()})
btn_divisao.addEventListener("click",()=>{opercoes[3]()})