exports.index = (req, res) => {
    res.send('<form action="/" method="POST"> <button>Enviar Formulário</button> ');
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};