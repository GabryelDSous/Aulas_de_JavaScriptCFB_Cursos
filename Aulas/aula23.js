/*(function soma(...valores){                   FINAL DA AULA for of
    let res=0   
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(10,5,2,8,15))          


function soma(...valores){                    APENAS COM A ESTRUTURA FOR
    let manho=valores.length
    let phga=0
    for(let i=0;i<manho;i++){
        phga+=valores[i]
    } return phga
}

console.log(soma(10,5,2,8))


function somar(...valores){                    COM ESTRUTURA FOR IN
    let res=0
    for(let v in valores){
        res = res + valores[v]
    } return res
}
console.log(somar(10,5,2,8))*/


// function somar(...valores){                    COM ESTRUTURA FOR OF
//     let res=0
//     for(let v of valores){
//         res=res+v
//     } return res
// }
// console.log(somar(5,5,2,2,1))

function somar(...valores){
    let res=0
    for(v of valores)
        res+=v
    return res
} 

console.log(somar(1,2,3,4,5))