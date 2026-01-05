// ---obj---
class GerenciadorAlunos {
    
    constructor(alunos, media){
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

    aprovados(){
        let resultado = [];

        this.alunos.forEach((aluno) => {
            if(aluno.nota >= this.media){
                resultado.push(`${aluno.nome} - ${aluno.nota}`);
            }
        });

        return resultado.length
            ? resultado.join("<br>")
            : "Nenhum aluno aprovado";
    }

    reprovados(){
        let resultado = [];

        this.alunos.forEach((aluno) => {
            if(aluno.nota < this.media){
                resultado.push(`${aluno.nome} - ${aluno.nota}`);
            }
        });
        return resultado.length
            ? resultado.join("<br>")
            : "Nenhum aluno reprovado";
    }

    removerAluno(nome){
        this.alunos = this.alunos.filter(aluno => aluno.nome !== nome);
    }


};


export default GerenciadorAlunos;




