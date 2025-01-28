const pessoas = [
    { nome: `luiz`, idade: 62 },
    { nome: `maria`, idade: 23 },
    { nome: `eduardo`, idade: 55 },
    { nome: `leticia`, idade: 19 },
    { nome: `rosana`, idade: 32 },
    { nome: `wallace`, idade: 47 },
]

const filtroIdade = pessoas.filter(obj => obj.idade > 30);
const filtroNome = pessoas.map(obj => obj.nome);
const maisVelha = pessoas.reduce((acumula, obj) => {
    if (obj.idade < acumula) {
        return acumula;
    }
    acumula = obj.idade;
    return acumula;
}, 0);

console.log(maisVelha);

console.log(filtroIdade);
console.log(filtroNome);