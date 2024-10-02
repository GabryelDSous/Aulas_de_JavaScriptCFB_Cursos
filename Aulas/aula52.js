const caixa=document.querySelector("#caixa")

let cores=["azul","verde","vermelho",["claro","escuro","medio"]]
let cursos=["HTML","CSS","Javascript",cores]
console.log(cursos[3][3][2])

// cursos[0]="C++"

// cursos.push("C++")
// cursos.unshift("Python")
// cursos.shift()


cursos.map(el=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})


