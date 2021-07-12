const livros = require("./database")

//interação com usuário via terminal
const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? S/N\n")

if (entradaInicial.toLocaleUpperCase() == "S") {
    console.log("Essas são as categorias disponíveis:\n")
    console.log('Produtividade', '/ História brasileira', '/ Américas', '/ Estilo de vida', '/ Tecnologia\n')

    const entradaCategoria = readline.question("Qual categoria você escolhe?\n")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)

    console.log("Esses são todos os livros disponíveis:\n")
    console.table(livrosOrdenados)
}