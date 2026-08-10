// import modules
import db from '#config/database.js';

db.run(
  `
    CREATE TABLE IF NOT EXISTS contact_form (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      whatsapp_number TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      contact_reason TEXT NO NULL,
      contact_message TEXT
    )
  `
);

export function getAllFormRepository() {
  return new Promise((res, rej) => {
    db.all(
      `
        SELECT * FROM contact_form
      `,
      [],
      function(err, rows) {
        if(err) {
          rej(err);
        } else {
          res(rows);
        }
      }
    );
  });
}

export function getFormByIdRepository(id) {
  return new Promise((res, rej) => {
    db.get(
      `
        SELECT * FROM contact_form
        WHERE id = ?
      `,
      [id],
      function(err, row) {
        if(err) {
          rej(err);
        } else {
          res(row);
        }
      }
    );
  });
}

export function createFormRepository(newForm) {
  return new Promise((res, rej) => {
    const { name, whatsappNumber, email, contactReason, ContactMessage } = newForm;
    db.run(
      `
        INSERT INTO contact_form (name, whatsapp_number, email, contact_reason, contact_message) 
        VALUES (?, ?, ?, ?, ?)
      `,
      [name, whatsappNumber, email, contactReason, ContactMessage],
      function(err) {
        if(err) {
          rej(err);
        } else {
          res({ message: 'new form successfully created...' });
        }
      }
    );
  });
}

export function deleteFormByIdRepository(id) {
  return new Promise((res, rej) => {
    db.run(
      `
        DELETE FROM contact_form
        WHERE id = ?
      `,
      [id],
      function(err) {
        if(err) {
          rej(err);
        } else {
          res({ message: 'form id successfully deleted...', id });
        }
      }
    );
  });
}
