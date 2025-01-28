function validaCPF(cpf) {
    this.cpf = Array.from(cpf.replace(/[^\d]+/g, ''));
    this.cpf.splice(-2, 2);//retira os dois ultimos digitos, -2 é a posição do array e 2 é a quantidade de digitos a serem retirados

    let total = 0;

    this.cpf.reduce((Ac, valor) => {
        total += valor * Ac;
        Ac--;
        return Ac;
    }, 10);
    total = (total * 10) % 11;
    (total >= 10) ? this.cpf.push(0) : this.cpf.push(total);

    total = 0;
    this.cpf.reduce((Ac, valor) => {
        total += valor * Ac;
        Ac--;
        return Ac;
    }, 11);
    total = (total * 10) % 11;
    (total >= 10) ? this.cpf.push(0) : this.cpf.push(total);
    
    const cpfValido = cpf.replace(/[^\d]+/g, '');
    return (this.cpf.join('') === cpfValido) ? true : false;


}
console.log(validaCPF("705.484.450-52"));
