import GerenciadorAlunos from 'gerenciadorAlunos.js'
import localStorageVerificacao from 'validação.js'


let objAlunos = new GerenciadorAlunos();
console.log(objAlunos)


const btnAdicionar = document.querySelector("#btnAdicionar");
const btnAprovados = document.querySelector("#btnAprovados");
const btnReprovados = document.querySelector("#btnReprovados");
const mensagem = document.querySelector(".mensagem")
const lista = document.querySelector(".lista");
const media = document.querySelector("#mediaValue");
// ---verificação---
localStorageVerificacao()

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
        localStorage.setItem(0, JSON.stringify(objAlunos.alunos))

        document.querySelector("#nome").value = "";
        document.querySelector("#nota").value = "";
    
        mensagem.innerHTML = "Aluno adicionado com sucesso";
        media.innerHTML = objAlunos.mediaGeral();
    }
    
});

btnAprovados.addEventListener("click", (e) => {
    e.preventDefault();
    mensagem.innerHTML = "";
    lista.innerHTML = `${objAlunos.aprovados()}`;
});

btnReprovados.addEventListener("click", (e) => {
    e.preventDefault();
    mensagem.innerHTML = "";
    lista.innerHTML = objAlunos.reprovados();
});
