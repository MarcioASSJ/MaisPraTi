//2. Verificando Propriedades

let livro={
    titulo: "A Garota no Gelo",
    autor: "Robert Bryndza",
    anoPublicacao: 2016,
    gereno: "Investigação"
}

let contEditora=0
for(let chave in livro){

    if(chave === "editora"){
        contEditora++
    }
}
    
    if(contEditora===0){
        livro.editora= "Gutenberg"
    }
    console.log(livro)