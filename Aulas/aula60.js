function Pessoa(pnome,pidade){
        this.nome=pnome,
        this.idade=pidade,
        this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(nome){
        this.nome=nome
    },
    this.setIdade=function(idade){
        this.idade=idade
    },
    this.info=function(){
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        }
}
let pessoas=[]

const btn_add=document.querySelector("#btn_add")
const res=document.querySelector(".res")

const addPessoas=()=>{
    res.innerHTML=""
    pessoas.forEach(p=>{
        const div=document.createElement('div')
        div.setAttribute("class",'pessoa')
        div.innerHTML=`Nome: ${p.getNome()}.<br/> Idade: ${p.getIdade()}.`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",()=>{
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addPessoas()
    console.log(pessoas)
})