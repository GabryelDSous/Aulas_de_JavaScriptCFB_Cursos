const caixa=document.querySelector("#caixa")

const musica=new Set(["musica1","musica boa","musica10"])

musica.add("musica muito legal")
musica.add("musica1")
musica.add("musica1")
musica.add("musica10")

musica.delete("musica1")
musica.clear()

console.log(musica)

// musica.forEach(el=>{
    
// })

for(m of musica){
    caixa.innerHTML+=m+"<br>"
}