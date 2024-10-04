const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set("cursos","Javascript")
mapa.set(10,"CFB Cursos")
mapa.set(1,100)
mapa.set("canal",1000)

// mapa.delete(1)

// console.log(mapa)

// let pes="teste"
// let res=""
// if(mapa.has(pes)){
//     res="A chave existe na coleção com o valor: "+mapa.get(pes)
// } else{
//     res="A chave não existe na coleção"
// }
// res+='<br> O tamanho da coleção é: '+mapa.size
// caixa.innerHTML=(res)

// mapa.forEach(element => {
//     console.log(element)
// });

console.log(mapa.values())