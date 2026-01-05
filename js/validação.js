function localStorageVerificacao() {
    if (localStorage.getItem(0) === null) {
        localStorage.setItem(0, JSON.stringify([]));
        objAlunos.alunos = [];
    } else {
        objAlunos.alunos = JSON.parse(localStorage.getItem(0));
    }
}; 
export default localStorageVerificacao