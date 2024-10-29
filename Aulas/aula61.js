const Pessoa={
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.nome=idade
    }
}

let pessoas=[]
const res=document.querySelector("#res")
const btn_add=document.querySelector("#btn_add")

const addPessoas=()=>{
    res.innerHTML=""
    pessoas.forEach(el=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${el.getNome()}<br/>Idade: ${el.getIdade()}`
        res.appendChild(div)
    })
}
btn_add.addEventListener("click",el=>{
    const f_nome=document.querySelector("#f_nome")
    const f_idade=document.querySelector("#f_idade")
    const p=new Pessoa(f_nome.value,f_idade.value)
    pessoas.push(p)
    f_nome.value=""
    f_idade.value=""
    f_nome.focus()
    addPessoas()
})










// const p2=Pessoa
// const p3=Pessoa

// p3.nome="Cladisardson"
// p2["nome"]="Bridgertrudismelda"
// Pessoa.setNome("Patricscrerdison")

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)