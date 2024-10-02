// const somar=val=>{
//     let res=0
//     for(v of val){
//         res+=v
//     } return res
// }

// const soma=(...valores)=>{
    
//     return somar(valores)
// }

// console.log(soma(5,10,5))

// valor=[100,50,150,422,4,2,4123,123,13,412,341,231412,424,13223,2113]
// console.log(soma(...valor))


const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        } return res
    } 
    return somar(valores)
}

console.log(soma(4,3))              