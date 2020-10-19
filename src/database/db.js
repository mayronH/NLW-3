const dataBase = require('sqlite-async');

// Abrir o banco de dados e depois passar o banco aperto para a função
// dataBase.open(__dirname + '/database.sqlite').then(execute);

function execute(db) {
    // a `` é uma string que permite formatar, quebrar linhas e passar variáveis, diferente das "" e ''
    // Retorna o banco de dados criado
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = dataBase.open(__dirname + '/database.sqlite').then(execute)