function Tabuada(){
    doc = document.querySelector(`.container`);

    this.iniciar = () =>{
        clickei();
    }

    const clickei = () =>{
        document.addEventListener(`click`,e =>{
            const el = e.target;
            const result = doc.querySelector(`.resultado`);

            if(el.classList.contains(`somar`)){
                for(let x = 1; x<=10;x++){
                    for(let y = 1; y<= 10;y++){
                        result.innerHTML += `${x} +${y}= ${x*y}<br>`;
                    }
                }
            }
            if(el.classList.contains(`subtracao`)){
                
            }
            if(el.classList.contains(`divisao`)){
                
            }
            if(el.classList.contains(`multiplicar`)){
                
            }

        })
    }
}

const tab = new Tabuada();
tab.iniciar();