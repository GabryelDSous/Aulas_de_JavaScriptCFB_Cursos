class Carro{
    canal= "CFB Cursos"
    constructor(pnome,ptipo){
        this.nome=pnome
        this.canal="Youtube"
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        } else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        } else if(ptipo==3){
            this.tipo="Passeios"
            this.velmax=160
        } else{
            this.tipo="Militar"
            this.velmax=180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(vel){
        this.velmax=vel
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`V.Max: ${this.canal}`)
        console.log("----------------------")
    }
}
let c1=new Carro("Rapidão",1)
let c2=new Carro("Super Luxo",2)
let c3=new Carro("Bombadão",4)
let c4=new Carro("Carrego tudo",2)


// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)

c1.setNome("super veloz")
c1.setTipo(2)
c1.setVelMax(324)
c1.info()
// c2.info()

// console.log(c1.getInfo()[0])