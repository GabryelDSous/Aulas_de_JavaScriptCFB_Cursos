const pessoa={
    nome:"Bruno",
    canal:"CFB Cursos",
    curso: "JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicionaal"
    }
}

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicionaal"}}'


const s_json_pessoa=JSON.stringify(pessoa) // Converte Objeto em String JSON
const o_json_pessoa=JSON.parse(string_pessoa) // Converte String JSON em Objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)