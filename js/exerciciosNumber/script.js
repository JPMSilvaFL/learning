const numero = Number(prompt(`Informe um numero: `));
const numeroTitulo = document.getElementById(`numeroTitulo`);
numeroTitulo.innerHTML = numero;

const raizQuadrada = document.getElementById(`raizQuadrada`);
raizQuadrada.innerHTML = Math.sqrt(numero);

const numeroInteiro = document.getElementById(`numeroInteiro`);
numeroInteiro.innerHTML = numero;

const integer = document.getElementById(`integer`);
integer.innerHTML = Number.isInteger(numero);

const nan = document.getElementById(`nan`);
nan.innerHTML = Number.isNaN(numero);

const floor = document.getElementById(`floor`);
floor.innerHTML = Math.floor(numero);

const high = document.getElementById(`high`);
high.innerHTML = Math.ceil(numero);

const decimais = document.getElementById(`decimais`);
decimais.innerHTML = numero.toFixed(2);