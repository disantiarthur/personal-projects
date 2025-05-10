const prompt = require ("prompt-sync")();

const aluno = "NomeAluno"
let pontosSomados = 0;
let notasLancadas = 0; 
let mediaPontos = 0;

while (notasLancadas <5) {
const nota = Number(prompt(`${notasLancadas + 1}a nota do ${aluno}: `));
console.log(`A nota iserida foi ${nota}`); 
pontosSomados = pontosSomados + nota;
notasLancadas = notasLancadas + 1;
mediaPontos = pontosSomados / notasLancadas
console.log(`Média até ${notasLancadas}a nota: ${mediaPontos}`);
}

console.log(`Média final do ${aluno}: ${mediaPontos}`)

if (mediaPontos >=6){ 
    console.log("Aluno aprovado");
} else { 
    console.log("Aluno reprovado");
}
