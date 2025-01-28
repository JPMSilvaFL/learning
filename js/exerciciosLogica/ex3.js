function divisores(x) {
    if (typeof (x) !== `number`) {
        return `nao e numero`;
    } else if (x > 100 && x < 0) {
        return `preencha com valores entre 0-100`
    } else if (x % 3 === 0 && x % 5 === 0) {
        return `FizzBuzz`;
    } else if (x % 3 === 0) {
        return `Fizz`;
    } else if (x % 5 === 0) {
        return `Buzz`;
    }
    return x;
}

console.log(divisores(`dmal;dkla`));
