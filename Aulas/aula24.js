// let f=new Function("v1","v2","v3","return v1+v2+v3") // função Construtor e continua no padrão Anônima


// console.log(f(10,5,15))

let f=new Function ("v1","v2","v3", "return 10+v3-12")
console.log(f(10,5,15))