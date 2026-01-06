// ---obj---
class GerenciadorAlunos {
    
    constructor(){
        this.alunos = [],
        this.media = 7
    }

    adicionarAluno(nome, nota){
        nota = Number(nota);

        if(nome === "" || isNaN(nota) || nota < 0 || nota > 10){
            return "Dados inválidos";
        }


        this.alunos.push({ nome:nome, nota:nota });
    }

    mediaGeral(){
        let soma = 0;
        this.alunos.forEach((aluno) => {
            soma += aluno.nota;
        });

        let media = soma / this.alunos.length;
        return Number(media.toFixed(2));
    }

    aprovados() {
        return this.alunos.filter(aluno => aluno.nota >= this.media);
    }

    reprovados() {
        return this.alunos.filter(aluno => aluno.nota < this.media);
    }


    removerAluno(nome){
        this.alunos = this.alunos.filter(aluno => aluno.nome !== nome);
    }


};
let objAlunos = new GerenciadorAlunos();



// ---verificação---
function localStorageVerificacao() {
    if (localStorage.getItem(0) === null) {
        localStorage.setItem(0, JSON.stringify([]));
        objAlunos.alunos = [];
    } else {
        objAlunos.alunos = JSON.parse(localStorage.getItem(0));
    }
}; 
localStorageVerificacao()
// --------------------DOM----------------
const btnAdicionar = document.querySelector("#btnAdicionar");
const btnAprovados = document.querySelector("#btnAprovados");
const btnReprovados = document.querySelector("#btnReprovados");
const mensagem = document.querySelector(".mensagem")
const lista = document.querySelector(".lista");
const media = document.querySelector("#mediaValue");


btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault();

    let nome = document.querySelector("#nome").value;
    let nota = document.querySelector("#nota").value;
    if (nome === "" || nota ===""){
        mensagem.innerHTML = "Campos vazios";
    }else if(nota > 10 || nota < 0){
        mensagem.innerHTML = "O valor de nota é entre 0 e 10";
    }else{
        objAlunos.adicionarAluno(nome, nota);

        localStorage.setItem(0, JSON.stringify(objAlunos.alunos));

        document.querySelector("#nome").value = "";
        document.querySelector("#nota").value = "";
    
        mensagem.innerHTML = "Aluno adicionado com sucesso";
        media.innerHTML = objAlunos.mediaGeral();
    }
    
});

btnAprovados.addEventListener("click", (e) => {
    e.preventDefault();
    const aprovados = objAlunos.aprovados();

    lista.innerHTML = aprovados.length
        ? aprovados.map(a => `${a.nome} - ${a.nota}`).join("<br>")
        : "Nenhum aluno aprovado";
});

btnReprovados.addEventListener("click", (e) => {
    e.preventDefault();
    const reprovados = objAlunos.reprovados();

    lista.innerHTML = reprovados.length
        ? reprovados.map(a => `${a.nome} - ${a.nota}`).join("<br>")
        : "Nenhum aluno reprovado";

});
