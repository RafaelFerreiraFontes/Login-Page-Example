const express = require('express');
const nunjucks = require('nunjucks');

// criando servidor http
var app = express();

const PORT = '8000';

let data = [];

app.use(express.urlencoded({ 
    extended: true
}));

// configurando pasta public (onde vai ficar os arquivos no servidor.)
app.use(express.static("public"));

// configurando template engine 
nunjucks.configure("pages", {
    autoescape: true,
    express: app
}); 

app.set('view engine', 'html');

// criando rota GET para a rota http://localhost:PORT/
app.get('/', (req, res) => { 
    // sempre que houver chamada para essa rota será renderizado o index.html com os dados de "data"
    res.render('index.html');
});

// criando rota POST para a rota http://localhost:PORT/
app.post('/', (req, res) => {
    // adicionando novo perfil e reenviando o html atualizado
    const new_profile = req.body;
    
    data.push(new_profile);

    res.render('index.html');
});

app.get('/users', (req, res) => {

    console.log(data);
    res.render('datas.html', { data });
});

// iniciando servidor
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});