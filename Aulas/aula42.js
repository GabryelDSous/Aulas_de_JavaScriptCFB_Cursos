const idades=[15,21,30,17,18,44,12,50]



const idadesMaior=(val)=>{
    if(val>=18) 
        return val
}
const idade=idades.filter(idadesMaior)
console.log(idade)




const maior=idades.filter((val,ind,arr)=>{
    if(val>=18)
        return val
})
const menor=idades.filter((val)=>{
    if(val<18)
        return val
})

console.log(idades)
console.log(menor)
console.log(maior)