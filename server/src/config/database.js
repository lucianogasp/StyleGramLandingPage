import sqlite3 from "sqlite3";

const db = new sqlite3.Database('contactForm_db.sqlite3.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco dados SQLite: ', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite com sucesso');
  }
});

export default db;
