const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('Produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
});

//Criar a tabela
//User.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//User.sync({ alter: true })

module.exports = User;