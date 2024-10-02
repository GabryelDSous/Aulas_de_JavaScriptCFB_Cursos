let n = 0
let max = 1000
let pares = 0

// while (n < max) {
//     console.log("CFB Cursos - " + n)
//     if(n>10){
//         break
//     }
//     n++
// }


// console.log(`Quantidade de pares: ${pares}`)
// console.log("Fim do programa")

// while(n<max){
//     console.log("CFB Cursos - " + n)
//     if(n>10){
//         break
//     }
//     n++
// }


for(let i=n; i<max;i++) {
    if(i%2!=0) {
        continue   
    }
    pares++
}

for(let i=n;n<max;i++){
    if(i%2==0){
        continue
    }
    pares++
}