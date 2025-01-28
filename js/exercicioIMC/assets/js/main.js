function meuEscopo() {
    const form = document.querySelector(`#form`);
    
    function recebeEventoForm(evento) {
        const form = document.querySelector(`#form`);
        const resultado = document.querySelector(`#resultado`);
        
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        
        event.preventDefault();
        console.log(peso.value,altura.value);
        let calculoImc = Number(peso.value/(altura.value*altura.value));
        
        let estagio;
        
        if (calculoImc < 18.5) {
            estagio = `Abaixo do peso`
        } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
            estagio = `peso normal`;
        } else if (calculoImc >= 25 && calculoImc <= 29.9) {
            estagio = `sobrepeso`;
        } else if (calculoImc >= 30 && calculoImc <= 34.9) {
            estagio = `Obesidade 1`
        } else if (calculoImc >= 35 && calculoImc <= 39.9) {
            estagio = `Obesidade 2`;
        } else if (calculoImc >= 40) {
            estagio = `gordo 10 jantas`;
        }
        

        resultado.innerHTML = `<p>seu imc e ${calculoImc.toFixed(2)} e vc esta em ${estagio}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();