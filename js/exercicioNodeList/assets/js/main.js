const paragrafos = document.querySelector(`.container`);
const ps = document.querySelectorAll(`p`);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for ( let valor of ps){
    valor.style.backgroundColor = backgroundColorBody;
    console.log(backgroundColorBody);
    valor.style.color = `white`;
}