let gerenciadorAlunos = {
    // puxa os dados do BD e guarda dentro do array
    alunos: [],
    media: 7,
    // adicionar, listar,média e aprovados
    adicionarAluno(nome, nota){
        if(nota > 10 || nota < 0){
            return "O valor de nota é inválido";
        }
        this.alunos.push({nome, nota});
    },


    listarAlunos(){
        this.alunos.forEach(i => console.log(`${i.nome} - ${i.nota}`))
    },
    
    mediaGeral(){
        if (this.alunos.length === 0) {
            return "Nenhum aluno cadastrado";
        }
        let media = 0;
        this.alunos.map((i) => media += i.nota)
        media = media / this.alunos.length
        return media.toFixed(2)
    },
    
    aprovados(){
        this.alunos.map((i) => {
            if(i.nota >= 7){
                return `${i.nome} - ${i.nota}`
            }
        })
    },
    

    reprovados(){
        this.alunos.map((i) => {
            if(i.nota < 7){
                return `${i.nome} - ${i.nota}`
            }
        })
    },
    
    removerAluno(remover){
        this.alunos = this.alunos.filter(n => n.nome !== remover);
        return 
    },
    
    buscarAluno(alunoNome){
        let busca = this.alunos.filter((i) => i.nome == alunoNome);
        
        
        if (busca[0] == undefined){
            return "Aluno não encontrado";
        }else {
            return `${busca[0].nome} - ${busca[0].nota}`; 
        }
        
    }
};

let btnAdicionar = document.querySelector("#btnAdicionar");
let btnAprovados = document.querySelector("#btnAprovados");
let btnReprovados = document.querySelector("#btnReprovados"); 

btnAdicionar.addEventListener("click", () =>{
    console.log("Teste Adicionar")
})
btnAprovados.addEventListener("click", () =>{
    console.log("Teste aprovados")
})
btnReprovados.addEventListener("click", () =>{
    console.log("Teste Reprovados")
})


