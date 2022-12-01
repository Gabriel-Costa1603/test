const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial");
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Produto cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não cadastrado com sucesso!"
        });
    });


});
app.put("/editar", async (req, res) => {
    const { id } = req.body;
    await User.update(req.body, {where: {id: id}})
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Produto editado com sucesso!"
        });
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não editado com sucesso!"
        });
    })
    
});

//APAGAR
app.delete("/deletar/:id", async (req, res) => {
    const { id } = req.params;

    await User.destroy({where: {id}})
    .then(()=> {
        return res.json({
            erro: false,
            mensagem: "Produto apagado com sucesso!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não apagado com sucesso!"
        });
    })
   
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});