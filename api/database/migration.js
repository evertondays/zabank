const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database/zabank_database.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, email VARCHAR UNIQUE, password VARCHAR, token VARCHAR, picture INTEGER)`);
});

db.close();